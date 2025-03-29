import { useEffect, useState } from 'react';

const useIsMobile = (MOBILE_BREAKPOINT = 768) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		console.log(mql);

		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};

		mql.addEventListener('change', onChange);

		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

		return () => {
			mql.removeEventListener('change', onChange);
		};
	}, [MOBILE_BREAKPOINT]);

	console.log({ isMobile: isMobile });

	return isMobile;
};

export default useIsMobile;
