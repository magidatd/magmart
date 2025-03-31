import { FaBars } from 'react-icons/fa6';

interface AdminHeaderProps {
	toggleSideBar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSideBar }) => {
	return (
		<header className='hidden h-16 w-full md:flex items-center relative justify-between px-5 space-x-10 bg-gray-800'>
			<div className=''>
				<button onClick={toggleSideBar}>
					<FaBars size={24} />
				</button>
				<h1 className='ml-4 text-xl font-medium'>Admin Dashboard</h1>
			</div>
			<div className='flex flex-shrink-0 items-center space-x-4 text-white'>
				<div className='flex flex-col items-end '>
					<div className='text-md font-medium '>Unknow Unknow</div>

					<div className='text-sm font-regular'>Student</div>
				</div>

				<div className='h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400'></div>
			</div>
		</header>
	);
};

export default AdminHeader;
