import Navbar from '@/components/ui/navbar';
import Topbar from '@/components/ui/topbar';

const Header = () => {
	return (
		<div className='border-b border-gray-200'>
			<Topbar />
			<Navbar />
		</div>
	);
};

export default Header;
