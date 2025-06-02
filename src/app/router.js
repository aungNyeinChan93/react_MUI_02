import { createBrowserRouter } from 'react-router';
import HomePage from './pages/Home/HomePage';
import MainLayout from './layouts/MainLayout';
import TestPage from './pages/Test/TestPage';
import DogPage from './pages/Dog/DogPage';
import TeamPage from './pages/Team/TeamPage';


const router = createBrowserRouter([
    {
        path: '/', Component: MainLayout, children: [
            { index: true, Component: HomePage },
            { path: 'tests', Component: TestPage },
            { path: 'dogs', Component: DogPage },
            { path: 'teams', Component: TeamPage },

        ]
    }
])

export default router;