

import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import CardManga from './CardManga'

const Product = () => {
  const [homenelo, setHomenelo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log('homenelo', homenelo.manga_link)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance('homenelo', 'GET', null, { 'Link-Full': 'https://ww6.manganelo.tv/home' });
        setHomenelo(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="product">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        homenelo.manga_link?.map((poster, index) => (
          <CardManga 
          poster={poster.poster}
          title={poster.title}
          authorHome={poster.author_home}
          urlManga={poster.link}
          homenelo={poster}
          />
        ))
      )}
    </div>
  );
}

export default Product;