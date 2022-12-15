import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://e-learnign-server.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  // console.log(categories);

  return (

    <div className='mt-6 sticky top-10'>
      {
        categories?.map(singleCategory => <SingleCategory
          key={singleCategory.id}
          singleCategory={singleCategory}></SingleCategory>)
      }
    </div >
  );
};

export default Categories;
