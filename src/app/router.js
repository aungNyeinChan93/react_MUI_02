import { createBrowserRouter } from 'react-router';
import HomePage from './pages/Home/HomePage';
import MainLayout from './layouts/MainLayout';
import TestPage from './pages/Test/TestPage';
import DogPage from './pages/Dog/DogPage';


const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            { index: true, Component: HomePage },
            { path: 'tests', Component: TestPage },
            { path: 'dogs', Component: DogPage },

        ]
    }
])

export default router;