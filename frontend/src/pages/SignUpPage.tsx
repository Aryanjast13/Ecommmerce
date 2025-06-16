import { ArrowRight, Loader } from "lucide-react";




import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";

("use client");

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "", 	 	
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useUserStore();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Form Column */}
        <div className="flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md space-y-8">
            {/* Logo/Brand */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-[#455A64] mr-2" />
                <h1 className="text-2xl font-bold text-[#263238]">SmartDrobe</h1>
              </div>
              <p className="text-[#455A64]">
                Sign up to your account to continue shopping
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#263238] font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your email"
                    className="mt-1 border-[#B0BEC5] text-[#263238]  focus:border-[#455A64] focus:ring-[#455A64]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#263238] font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your email"
                    className="mt-1 border-[#B0BEC5] text-[#263238]  focus:border-[#455A64] focus:ring-[#455A64]"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    className="text-[#263238] font-medium"
                  >
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="Enter your password"
                      className="border-[#B0BEC5] text-[#263238]  focus:border-[#455A64] focus:ring-[#455A64] pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-[#B0BEC5]" />
                      ) : (
                        <Eye className="h-4 w-4 text-[#B0BEC5]" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="confirmpassword"
                    className="text-[#263238] font-medium"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirmpassword"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="Enter your password"
                      className="border-[#B0BEC5] text-[#263238]  focus:border-[#455A64] focus:ring-[#455A64] pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-[#B0BEC5]" />
                      ) : (
                        <Eye className="h-4 w-4 text-[#B0BEC5]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#455A64] hover:bg-[#263238] text-white py-3 font-medium transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader
                      className="mr-2 h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    Loading...
                  </>
                ) : (
                  <>Sign Up</>
                )}
              </Button>

             
            </form>

            <div className="text-center">
              <p className="text-[#455A64]">
                {"Already have an account? "}
                <Link
                  to="/Login"
                  className="font-medium text-[#455A64] hover:text-[#263238] underline"
                >
                  Login Here <ArrowRight className="inline h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="hidden lg:block relative bg-[#F7F7F7] h-dvh ">
          <div className="absolute inset-0 bg-gradient-to-br from-[#455A64]/30 to-[#263238]/50" />
          <img
            src="/loginpage-sideimage.jpg"
            alt="Shopping experience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white max-w-md">
              <h3 className="text-3xl font-bold mb-4">
                Discover Amazing Products
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join thousands of satisfied customers who trust us for their
                shopping needs. Quality products, fast delivery, and exceptional
                service.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="opacity-80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="opacity-80">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="opacity-80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

