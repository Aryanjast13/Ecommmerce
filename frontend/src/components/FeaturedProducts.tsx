import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ featuredProducts }:any) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className='py-12'>
			<div className='container mx-auto px-4'>
				<h2 className='text-center text-5xl sm:text-6xl font-bold text-five mb-4'>Featured</h2>
				<div className='relative'>
					<div className='overflow-hidden'>
						<div
							className='flex transition-transform duration-300 ease-in-out gap-3'
							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
						>
							{featuredProducts?.map((product: any) => (
								<ProductCard product={product} key={product._id } />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeaturedProducts;
