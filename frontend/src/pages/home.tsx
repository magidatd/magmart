import FlexibleBanner from '@/components/home/flexible-banner';
import GlobalBanner from '@/components/home/global-banner';
import Hero from '@/components/home/hero';

const Home = () => {
	return (
		<div>
			<GlobalBanner />
			<FlexibleBanner />
			<Hero />
		</div>
	);
};

export default Home;
