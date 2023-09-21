import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosInstance'
import CardManga from './CardManga'

const Product = () => {
  const [homenelo, setHomenelo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10

  // console.log('homenelo', homenelo.manga_link)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance('homenelo', 'GET', null, { 'Link-Full': 'https://ww6.manganelo.tv/home' });
        setHomenelo(response.data);
        setTotalPages(Math.ceil(response.data.manga_link.length / itemsPerPage));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="product">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        homenelo.manga_link?.slice(startIndex, endIndex).map((poster, index) => (
          <CardManga 
          poster={poster.poster}
          title={poster.title}
          authorHome={poster.author_home}
          urlManga={poster.link}
          homenelo={poster}
          />
        ))
      )}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'pa-active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Product;