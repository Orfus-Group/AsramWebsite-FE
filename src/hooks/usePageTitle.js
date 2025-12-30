import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routesConfig from '@/routes/routesConfig';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        // Find the matching route based on current pathname
        const currentRoute = routesConfig.find(route => {
            // Handle exact match
            if (route.path === location.pathname) {
                return true;
            }

            // Handle dynamic routes (e.g., /faculty/:id, /news/:id)
            if (route.path.includes(':')) {
                const routePattern = route.path.replace(/:[^/]+/g, '[^/]+');
                const regex = new RegExp(`^${routePattern}$`);
                return regex.test(location.pathname);
            }

            return false;
        });

        // Set the page title
        if (currentRoute) {
            const pageTitle = currentRoute.label === 'Home'
                ? 'asram'
                : `asram - ${currentRoute.label}`;
            document.title = pageTitle;
        } else {
            document.title = 'asram';
        }
    }, [location]);
};

export default usePageTitle;
