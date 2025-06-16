import toast from "react-hot-toast";
import { create } from "zustand";
import axios from "../lib/axios";


export interface Product {
	_id: string;
	name: string;
	price: number;
	category: string;
	isFeatured: boolean;
	// Add any other fields your product model has
}

interface ProductStore {
	products: Product[];
	loading: boolean;
	setProducts: (products: Product[]) => void;
	createProduct: (productData: Partial<Product>) => Promise<void>;
	fetchAllProducts: () => Promise<void>;
	fetchProductsByCategory: (category: string) => Promise<void>;
	deleteProduct: (productId: string) => Promise<void>;
	toggleFeaturedProduct: (productId: string) => Promise<void>;
	fetchFeaturedProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
	products: [],
	loading: false,

	setProducts: (products) => set({ products }),
	createProduct: async (productData) => {
		set({ loading: true });
		try {
			const res = await axios.post("/products", productData);
			set((prevState) => ({
				products: [...prevState.products, res.data],
				loading: false,
			}));
		} catch (error:any) {
			toast.error(error.response.data.error);
			set({ loading: false });
		}
	},
	fetchAllProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/products");
			set({ products: response.data.products, loading: false });
		} catch (error:any) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to fetch products");
		}
	},
	fetchProductsByCategory: async (category) => {
		set({ loading: true });
		try {
			const response = await axios.get(`/products/category/${category}`);
			set({ products: response.data.products, loading: false });
		} catch (error:any) {
			set({loading: false });
			toast.error(error.response.data.error || "Failed to fetch products");
		}
	},
	deleteProduct: async (productId) => {
		set({ loading: true });
		try {
			await axios.delete(`/products/${productId}`);
			set((prevProducts) => ({
				products: prevProducts.products.filter((product) => product._id !== productId),
				loading: false,
			}));
		} catch (error:any) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to delete product");
		}
	},
	toggleFeaturedProduct: async (productId) => {
		set({ loading: true });
		try {
			const response = await axios.patch(`/products/${productId}`);
			// this will update the isFeatured prop of the product
			set((prevProducts) => ({
				products: prevProducts.products.map((product) =>
					product._id === productId ? { ...product, isFeatured: response.data.isFeatured } : product
				),
				loading: false,
			}));
		} catch (error:any) {
			set({ loading: false });
			toast.error(error.response.data.error || "Failed to update product");
		}
	},
	fetchFeaturedProducts: async () => {	
		set({ loading: true });
		try {
			const response = await axios.get("/products/featured");
			set({ products: response.data, loading: false });
		} catch (error:any) {
			set({ loading: false });
			console.log("Error fetching featured products:", error);
		}
	},
}));
