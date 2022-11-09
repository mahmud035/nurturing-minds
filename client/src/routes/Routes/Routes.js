import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Profile from '../../Others/Profile/Profile';
import AddService from '../../Pages/AddService/AddService';
import Appointment from '../../Pages/Appointment/Appointment';
import Blog from '../../Pages/Blog/Blog';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import AllService from '../../Pages/Home/Services/AllService/AllService';
import ServiceDetails from '../../Pages/Home/Services/ServiceDetails/ServiceDetails';
import Login from '../../Pages/Login/Login';
import EditReview from '../../Pages/MyReview/EditReview/EditReview';
import MyReview from '../../Pages/MyReview/MyReview';
import Register from '../../Pages/Register/Register';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <AllService></AllService>,
        loader: () =>
          fetch('https://nurturing-minds-server-side.vercel.app/services'),
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://nurturing-minds-server-side.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/my-review',
        element: (
          <PrivateRoutes>
            <MyReview></MyReview>
          </PrivateRoutes>
        ),
      },
      {
        path: '/edit-review/:id',
        element: (
          <PrivateRoutes>
            <EditReview></EditReview>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/edit-review/${params.id}`),
      },

      {
        path: '/add-service',
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },

      {
        path: '/book-session',
        element: (
          <PrivateRoutes>
            <Appointment></Appointment>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
