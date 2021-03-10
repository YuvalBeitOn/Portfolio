import HomePage from './cmps/HomePage/HomePage';
import About from './cmps/About/About';
import Projects from './cmps/Projects/Projects';
import Contact from './cmps/Contact/Contact';

const Routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/contact',
        component: Contact
    }
]

export default Routes
