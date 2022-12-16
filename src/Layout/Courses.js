import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Components/Categories/Categories';

const Courses = () => {
  return (
    <div className='md:grid md:grid-cols-4'>
      <div className='md:col-span-1'> 
           <Categories></Categories>
      </div>
      <div className='md:col-span-3 md:pr-3'>
         <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Courses;