import React, { useEffect, useState } from 'react';
import Navbar from "../components/common/Navbar";
import "./Profile.css"
import banner from "../img/banner.png";
import bt1 from "../img/bt1.png";
import bt2 from "../img/bt2.png";
import bt3 from "../img/bt3.png";
import product from "../img/product.png";
import tim from "../img/tim.png";
import chat from "../img/chat.png";
import arow from "../img/arow.png";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axiosInstance";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const Profile = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState();
    const navigate = useNavigate();
    const [id_user, setIdUser] = useState(null);
    const [name, setName] = useState(null);
    const [favoriteGenres, setFavoriteGenres] = useState([]);
    const [recentReads, setRecentReads] = useState([]);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUserLoggedIn(true);
            const user = JSON.parse(savedUser);
            const id_user = user.id_user;
            const img = user.link_avatar;
            const name = user.user_name;
            setIdUser(id_user);
            setAvatarUrl(img);
            setName(name);
        } else {
            setUserLoggedIn(false);
            navigate('/signin'); 
        }
    }, [navigate]);

    useEffect(() => {
        const fetchFavoriteGenres = async () => {
            try {
                const response = await axiosInstance(`api/favirote/${id_user}`);
                    setFavoriteGenres(response.data.favoriteGenres);
            } catch (error) {
                console.error("Lỗi khi lấy thông tin favorite:", error);
            }
        };
        fetchFavoriteGenres();
    }, [id_user]);

    useEffect(() => {
        const fetchRecentReads = async () => {
            try {
                const response = await axiosInstance(`api/recent/${id_user}`);
                if (response.status === 200) {
                    setRecentReads(response.data);
                }
            } catch (error) {
                console.error("Lỗi khi lấy thông tin đọc gần đây:", error);
            }
        };
        fetchRecentReads();
    }, [id_user]);


    if (!userLoggedIn) {
        return null;
    }

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setSelectedImage(selectedFile);
    };

    const handleUploadImage = async () => {
        try {
            const id = id_user;
            if (id && selectedImage) {
                const formData = new FormData();
                formData.append('image', selectedImage);
                formData.append('key', '2acd4ab023282d21670f660e348d4bdf'); 

            const imgBbResponse = await axios.post('https://api.imgbb.com/1/upload', formData);

            if (imgBbResponse.data.status === 200) {
                const imgBbUrl = imgBbResponse.data.data.url;

                const response = await axiosInstance(`api/avatar/${id}`, 'POST', {link_avatar: imgBbUrl});

                if (response.status === 200) {
                    setAvatarUrl(imgBbUrl);
                    console.log("Avatar updated successfully!");
                    toast.success('Avatar updated successfully!');
                }
            }
            }
        } catch (error) {
            console.error("Lỗi khi thay đổi avatar:", error);
        }
        setIsModalOpen(false);
    };



    return ( 
        <div>
            <Navbar/>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Chọn avatar mới</h3>
                        <input type="file" onChange={handleImageChange} />
                        {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{width:'inherit'}}/>}
                        <button className="uploadimg" onClick={handleUploadImage}>Tải lên</button>
                        <button className="btn-close" onClick={() => setIsModalOpen(false)}></button>
                    </div>
                </div>
            )}
            <div>
                <div style={{position:'relative', display:'grid', justifyItems:'center'}}>
                    <div className="banner-pro">
                        <img src={banner} alt="" />
                    </div>
                    <div className="ava-pro">
                        <a type="button" onClick={() => setIsModalOpen(true)} style={{width:'100%', cursor:'pointer', display:'contents'}}>
                            <img src={avatarUrl} alt="ava" style={{width:'100%', height:'282px', objectFit:'cover', borderRadius:'50%'}}/>
                        </a>
                        <h2>{(name == null) ? "No name" : name}</h2>
                        <div>
                            <button><img src={bt1} alt="" /></button>
                            <button><img src={bt2} alt="" /></button>
                            <button><img src={bt3} alt="" /></button>
                        </div>
                    </div>
                </div>
                    
                <div className="profile-information">
                    <div className="favorite-read">
                        <div className="favorite">
                            <p>Favorite Genres</p>
                            <div className="favorite-list">
                            {/* {favoriteGenres.map((genre, index) => (
                                <button key={index}>{genre}</button>
                            ))} */}
                                <button>Horror</button>
                                <button>Drama</button>
                                <button>Cooking</button>
                                <button>Parody</button>
                                <button>Magic</button>
                                <button>Cooking</button>
                                <button>Parody</button>
                                <button>Magic</button>

                            </div>

                        </div>
                        <div className="read">
                            <p>Read Recently</p>
                            <div className="read-list">
                            {recentReads.map((read, index) => (
                                <button key={index}>
                                    <p>{read.title}</p> <p>{read.datetime}</p>
                                </button>
                            ))}
                                <button><p>Naruto: The Man called Kisame</p> <p>1m</p></button>
                                <button><p>One Piece: The Beginning</p> <p>12m</p></button>
                                <button><p>Slam Dunk: The 1v1</p> <p>1d</p></button>

                            </div>
                        </div>
                    </div>

                    <div className="stories-read">
                        <div className="stories-read-list">
                            <img src={product} alt="" />
                            <div className="describe">
                                <p>Naruto Episode 1</p>
                                <span>"Naruto" is an iconic manga and anime series that has left a lasting impact on its fans. 
                                    With its compelling story of perseverance, friendship, and self-discovery, 
                                    it takes readers on a thrilling journey filled with memorable characters, epic battles, 
                                    and powerful life lessons. A true classic in the world of anime.
                                </span>
                                <div className="timed-read">
                                    1m
                                </div>
                            </div>
                            <div className="describe-btn">
                                <button><img src={tim} alt="" /></button>
                                <button><img src={chat} alt="" /></button>
                                <button><img src={arow} alt="" /></button>
                            </div>
                        </div>
                        <div className="stories-read-list">
                            <img src={product} alt="" />
                            <div className="describe">
                                <p>Naruto Episode 1</p>
                                <span>"Naruto" is an iconic manga and anime series that has left a lasting impact on its fans. 
                                    With its compelling story of perseverance, friendship, and self-discovery, 
                                    it takes readers on a thrilling journey filled with memorable characters, epic battles, 
                                    and powerful life lessons. A true classic in the world of anime.
                                </span>
                                <div className="timed-read">
                                    1m
                                </div>
                            </div>
                            <div className="describe-btn">
                                <button><img src={tim} alt="" /></button>
                                <button><img src={chat} alt="" /></button>
                                <button><img src={arow} alt="" /></button>
                            </div>
                        </div>
                        <div className="stories-read-list">
                            <img src={product} alt="" />
                            <div className="describe">
                                <p>Naruto Episode 1</p>
                                <span>"Naruto" is an iconic manga and anime series that has left a lasting impact on its fans. 
                                    With its compelling story of perseverance, friendship, and self-discovery, 
                                    it takes readers on a thrilling journey filled with memorable characters, epic battles, 
                                    and powerful life lessons. A true classic in the world of anime.
                                </span>
                                <div className="timed-read">
                                    1m
                                </div>
                            </div>
                            <div className="describe-btn">
                                <button><img src={tim} alt="" /></button>
                                <button><img src={chat} alt="" /></button>
                                <button><img src={arow} alt="" /></button>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
     );
}
 
export default Profile;