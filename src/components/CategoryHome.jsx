
import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const CategoryHome = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log('categories', categories)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance('category_home', 'GET', null, { 'Link-Full': 'https://ww6.manganelo.tv/home' });
        setCategories(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='category'>
      <h4>CATEGORY</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (categories.category_home?.map((category, index) => (
        <button key={index}>{category}</button>
      )))}
    </div>
  );
}

export default CategoryHome;
