import { createBrowserRouter } from "react-router-dom";
import GroupCourses from "../Components/GroupCourses/GroupCourses";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Courses from "../Layout/Courses";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        children:[
          {
            path:'/courses/:id',
            loader: ({params})=>fetch (`https://e-learnign-server.vercel.app/courses/${params.id}`),
            element:<GroupCourses></GroupCourses>,

          }
        ]
      },
    ]
  }
])