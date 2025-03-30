import FlexibleBanner from '@/components/home/flexible-banner';
import GenderCollectionSection from '@/components/home/gender-collection-section';
import GlobalBanner from '@/components/home/global-banner';
import Hero from '@/components/home/hero';
import NewArrivals from '@/components/home/new-arrivals';
import ProductDetails from '@/components/products/product-details';
import { collectionData, newArrivals } from '@/data/hero-data';

const Home = () => {
	return (
		<div>
			<GlobalBanner />
			<FlexibleBanner />
			<Hero />
			<GenderCollectionSection collections={collectionData} />
			<NewArrivals newArrivals={newArrivals} />

			<h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
			<ProductDetails />
		</div>
	);
};

export default Home;
