import { Outlet } from 'react-router-dom';

const UserLayout = () => {
	return (
		<>
			{/* Header */}
			<main>
				{/* Main content */}
				<Outlet />
			</main>
		</>
	);
};

export default UserLayout;
