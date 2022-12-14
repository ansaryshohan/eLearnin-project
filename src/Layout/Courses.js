import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Components/Categories/Categories';

const Courses = () => {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-1'> 
           <Categories></Categories>
      </div>
      <div className='col-span-2'>
         <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Courses;