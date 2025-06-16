import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar1 from "./components/Navbar";
import { useCartStore } from "./stores/useCartStore";
import { useUserStore } from "./stores/useUserStore";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const PurchaseSuccessPage = lazy(() => import("./pages/PurchaseSuccessPage"));
const PurchaseCancelPage = lazy(() => import("./pages/PurchaseCancelPage"));

function App() {
	const { user, checkAuth, checkingAuth }: any = useUserStore();
	const { getCartItems } = useCartStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (!user) return;
		getCartItems();
	}, [getCartItems, user]);

	if (checkingAuth) return <LoadingSpinner />;

	return (
		<div className='min-h-screen bg-white text-white relative overflow-hidden'>
			<div className='relative z-50 '>
				<Navbar1 />

				<Suspense fallback={<LoadingSpinner />}>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to='/' />} />
						<Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />
						<Route
							path='/secret-dashboard'
							element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}
						/>
						<Route path='/category/:category' element={<CategoryPage />} />
						<Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
						<Route path='/about' element={user ? <AboutPage /> : <Navigate to='/login' />} />
						<Route path='/contact' element={user ? <ContactPage /> : <Navigate to='/login' />} />
						<Route path='/profile' element={user ? <ProfilePage /> : <Navigate to='/login' />} />
						<Route
							path='/purchase-success'
							element={user ? <PurchaseSuccessPage /> : <Navigate to='/login' />}
						/>
						<Route
							path='/purchase-cancel'
							element={user ? <PurchaseCancelPage /> : <Navigate to='/login' />}
						/>
					</Routes>
				</Suspense>

				<Footer />
			</div>

			<Toaster />
		</div>
	);
}

export default App;
