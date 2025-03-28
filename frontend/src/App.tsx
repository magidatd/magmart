import { ReactNode, useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import UserLayout from './components/layout/user-layout';

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
					></Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
