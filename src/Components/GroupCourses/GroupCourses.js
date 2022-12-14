import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const GroupCourses = () => {
  const courseData = useLoaderData();
  // console.log(courseData);
  return (
    <div className='grid grid-cols-3 gap-6'>
     {
      courseData.map(course=><SingleCourse
      key={course.id}
      course={course}></SingleCourse>)
     }
    </div>
  );
};

export default GroupCourses;