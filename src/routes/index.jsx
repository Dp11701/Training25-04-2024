import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Log from '../pages/Log';
import ElectricApp from '../pages/ElectricApp';
import Vehical from '../pages/Vehicle/Vehicle';
import Book from '../pages/Book';
import Sport from '../pages/Sport';
import Health from '../pages/Health';
import House from '../pages/House';
import MotherBaby from '../pages/MotherBaby';



const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    {path: '/electricapp', component: ElectricApp },
    {path: '/vehical', component: Vehical },
    {path: '/book', component: Book },
    {path: '/sport', component: Sport },
    {path: '/house', component: House },
    {path: '/health', component: Health },
    {path: '/motherbaby', component: MotherBaby },
    { path: '/log', component: Log, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };