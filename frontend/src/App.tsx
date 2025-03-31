import { ReactNode, useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import UserLayout from '@/components/layout/user-layout';
import Home from '@/pages/home';
import AuthLayout from '@/components/auth/auth-layout';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import Profile from '@/pages/profile';
import OrderDetails from '@/pages/order-details';
import Orders from '@/pages/orders';
import Checkout from '@/pages/checkout';

const Wrapper = ({ children }: { children: ReactNode }) => {
	const location = useLocation();

	useLayoutEffect(() => {
		// Scroll to the top of the page on route change
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return <>{children}</>;
};

const App = () => {
	return (
		<BrowserRouter>
			<Toaster position='top-right' />
			<Wrapper>
				<Routes>
					<Route
						path='/'
						element={<UserLayout />}
					>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path='/profile'
							element={<Profile />}
						/>
						<Route
							path='/orders'
							element={<Orders />}
						/>
						<Route
							path='/order/:id'
							element={<OrderDetails />}
						/>
						<Route
							path='/checkout'
							element={<Checkout />}
						/>
					</Route>
					<Route
						path='/auth'
						element={<AuthLayout />}
					>
						<Route
							path='login'
							element={<Login />}
						/>
						<Route
							path='register'
							element={<Register />}
						/>
					</Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
