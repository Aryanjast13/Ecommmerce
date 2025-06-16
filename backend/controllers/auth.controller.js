import jwt from "jsonwebtoken";
import generateTokens from "../auth.utils/jwt.js";
import setCookies from "../auth.utils/setCookies.js";
import storeRefreshToken from "../auth.utils/storeToken.js";
import { redis } from "../config/redis.js";

import User from "../models/user.model.js";


const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" })
    }
    const user = await  User.create({ name, email, password });
   

    const { accessToken, refreshToken } = generateTokens(user._id);
    
    await storeRefreshToken(user._id, refreshToken);

    setCookies(res, accessToken, refreshToken);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address:user.address,
      role: user.role,
    });

  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

const editProfile = async (req, res) => {
  try {
    const { name, address } = req.body;
    const user = req.user;

    user.name = name;
    user.address= address;
    const response= await user.save();
    res.status(200).json({ message: "data updated succesfully", user: response });
    
  } catch (error) {
    console.log("Error in edit data", error.message);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try { 
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      const { accessToken, refreshToken } = generateTokens(user._id);
      
      await storeRefreshToken(user._id, refreshToken);
      setCookies(res, accessToken, refreshToken)
      
      res.json({
        _id: user._id,
        name:user.name,
        email: user.email,
        address:user.address,
        role:user.role,  
      })
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }

  } catch (error) {
    console.log("Error in login credtinals", error.message);
    res.status(500).json({ message: error.message });
    }
};  

const logout = async (req, res) => {
  try { 
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      await redis.del(`refresh_token:${decoded.userId}`)
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({message:"Logged out successfully"})
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({})
   }

};

const refreshToken = async (req, res)=>{
  try { 
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

    if (storedToken !== refreshToken) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const accessToken = jwt.sign({ userId:decoded.userId },process.env.ACCESS_TOKEN_SECRET, {
             expiresIn: "15m",
    });
    

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.json({ message: "Token refreshed successfully" });

  }
  catch (error) {
    console.log("Error in refreshToken controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

 const getProfile = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export { editProfile, getProfile, login, logout, refreshToken, signup };

