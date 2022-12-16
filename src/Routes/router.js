import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Faq from "../Components/Faq/Faq";
import GroupCourses from "../Components/GroupCourses/GroupCourses";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import CourseDetails from "../Components/SingleCourse/CourseDetails";
import Courses from "../Layout/Courses";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
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
        path: '/courses',
        element: <Courses></Courses>,
        children: [
          {
            path: '/courses/:id',
            loader: ({ params }) => fetch(`https://e-learnign-server.vercel.app/courses/${params.id}`),
            element: <GroupCourses></GroupCourses>,

          }
        ]
      },
      {
        path: '/course/:id',
        loader: ({ params }) => fetch(`https://e-learnign-server.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      }
    ]
  }
])