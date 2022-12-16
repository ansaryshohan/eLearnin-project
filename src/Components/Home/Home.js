import React from 'react';
import BannerSection from './HomeSections/BannerSection';
import CourseSection from './HomeSections/CourseSection';
import Subscribe from './HomeSections/Subscribe';

const Home = () => {
  return (
    <div>
      {/* slider banners starts  here */}
     <BannerSection></BannerSection>
      {/* slider banners ends here */}
      <CourseSection></CourseSection>
      {/* subscribe section starts */}
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;