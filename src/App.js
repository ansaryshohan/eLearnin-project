
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import { router } from './Routes/router';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
