import union from '../img/Union.png'
import mess from '../img/Message.png'
import vector from '../img/Vector.png'
import './css/Product.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';


function CardManga( {poster, title, authorHome, urlManga, homenelo} ) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [noidungComment, setNoidungComment] = useState('');
  const [idUser, setIdUser] = useState('');
  const [hasLike, setHasLike] = useState(false);



  const urlParts = urlManga?.split("/");
  const mangaSlug = urlParts?.slice(urlParts?.indexOf("manga")).join("/");
  // console.log('mangaSlug', mangaSlug)

  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        setUserLoggedIn(true);
        const user = JSON.parse(savedUser);
        const idUser = user.id_user;
        setIdUser(idUser);
    } else {
        setUserLoggedIn(false);
    }
}, [navigate]);

  const handleClickManga = () => {
    navigate(`/${mangaSlug}`, { state: { poster, title, authorHome, urlManga, homenelo } });
  }

  const handleComment = () => {
    if(idUser){
      if (noidungComment.trim() === '') {
        toast.error('Comment cannot be empty!');
        return;
      }
      const userComment = {
        idUser: idUser,
        link_chapter: urlManga,
        link_manga: urlManga,
        ip_comment: "1.1.1",
        device_comment: "laptop",
        noidungComment: noidungComment,
      };
      axiosInstance('api/comment/chapter', 'POST', userComment)
      .then(response => {
        console.log("Comment posted successfully:", response.data);
        toast.success("Comment successfully")
        setNoidungComment('');
      })
      .catch(error => {
        console.error("Error posting comment:", error);
      });
      
    }else{
      toast.error('Bạn cần đăng nhập để comment!')
    }
  }

  const handleLikeManga = () => {
    if(idUser){
      const currentDate = new Date();
      
      const userLike = {
        link: urlManga,
        dateTimeLike: "12",
        ip_like: "1.1.1.1",
        name_device_like: "laptop"
      };
      console.log(userLike);
      axiosInstance(`api/favirote/${idUser}`, 'POST', userLike)
      .then(response => {
        console.log("Manga posted successfully:", response.data);
        setHasLike(true);
        toast.success("Like manga successfully")
      })
      .catch(error => {
        console.error("Error posting manga:", error);
      });
    }else{
      toast.error('Bạn cần đăng nhập để lưu truyện yêu thích!')
    }
  }

  return (
    <div className='list-product' >
      {isModalOpen && (
        <div className="modal-overlay">
            <div className="cmt">
                <h3>Comment</h3>
                <input type="text" name='noidungComment'value={noidungComment} placeholder='comment...'
                    onChange={event => setNoidungComment(event.target.value)}/>
                <button className="uploadcmt" onClick={handleComment}>Comment</button>
                <button className="btn-close" onClick={() => setIsModalOpen(false)}></button>
            </div>
        </div>
      )}
      <div style={{ width: '70%', cursor:'pointer' }} >
        <img src={poster} alt="" style={{ width: '100%', height:'100%' ,borderRadius: '15px', objectFit:'cover'}} onClick={handleClickManga} />
        <div className='name-product'>
          <div className='name' onClick={handleClickManga} >
            <h5>{title}</h5>
            <h6>{authorHome}</h6>
          </div>
          <div className='link-manga'>
            <button onClick={handleLikeManga}>
              {
              (hasLike) ? (<i class="fa-solid fa-heart" style={{ fontSize: '24px', color:'red' }}></i>) 
              : (<i className="fa-regular fa-heart" style={{ fontSize: '24px' }}></i>)
              }
              {/* <i className="fa-regular fa-heart" style={{ fontSize: '24px' }}></i>
              <i class="fa-solid fa-heart" style={{ fontSize: '24px', color:'red' }}></i> */}
            </button>
          </div>
        </div>
      </div>
      <div className='icon-btn'>
        <button><img src={union} alt="" /></button>
        <button onClick={() => setIsModalOpen(true)}><img src={mess} alt="" /></button>
        <button><img src={vector} alt="" /></button>
      </div>

    </div>
  );
}

export default CardManga;