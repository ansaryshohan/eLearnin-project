import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const GroupCourses = () => {
  const courseData = useLoaderData();
  // console.log(courseData);
  return (
    <div className='lg:grid lg:grid-cols-3 gap-6 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 mt-8'>
     {
      courseData.map(course=><SingleCourse
      key={course.id}
      course={course}></SingleCourse>)
     }
    </div>
  );
};

export default GroupCourses;