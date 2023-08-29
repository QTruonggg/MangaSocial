import union from '../img/Union.png'
import mess from '../img/Message.png'
import vector from '../img/Vector.png'
import './css/Product.css'
import { useNavigate } from "react-router-dom";

function CardManga( {poster, title, authorHome, urlManga, homenelo} ) {

  const urlParts = urlManga?.split("/");
  const mangaSlug = urlParts?.slice(urlParts?.indexOf("manga")).join("/");
  console.log('mangaSlug', mangaSlug)

  const navigate = useNavigate()
  const handleClickManga = () => {
    navigate(`/${mangaSlug}`, { state: { poster, title, authorHome, urlManga, homenelo } });
  }

  return (
    <div className='list-product' onClick={handleClickManga}>
      <div style={{ width: '70%' }}>
        <img src={poster} alt="" style={{ width: '100%', borderRadius: '15px' }} />
        <div className='name-product'>
          <div className='name'>
            <h5>{title}</h5>
            <h6>{authorHome}</h6>
          </div>
          <div>
            <i className="fa-regular fa-heart" style={{ fontSize: '24px' }}></i>
          </div>
        </div>
      </div>
      <div className='icon-btn'>
        <button><img src={union} alt="" /></button>
        <button><img src={mess} alt="" /></button>
        <button><img src={vector} alt="" /></button>
      </div>

    </div>
  );
}

export default CardManga;