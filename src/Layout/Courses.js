import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Components/Categories/Categories';

const Courses = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1'> 
           <Categories></Categories>
      </div>
      <div className='col-span-3 pr-3'>
         <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Courses;