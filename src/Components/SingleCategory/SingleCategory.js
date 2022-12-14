import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({singleCategory}) => {
const {category, id}= singleCategory;
console.log(singleCategory)

  return (
    <div>
      <Link to={`/courses/${id}`}>{category}</Link>
    </div>
  );
};

export default SingleCategory;