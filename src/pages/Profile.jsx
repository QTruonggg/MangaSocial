import Navbar from "../components/common/Navbar";
import "./Profile.css"
import banner from "../img/banner.png";
import avaPro from "../img/avaPro.png";
import bt1 from "../img/bt1.png";
import bt2 from "../img/bt2.png";
import bt3 from "../img/bt3.png";
import product from "../img/product.png";
import tim from "../img/tim.png";
import chat from "../img/chat.png";
import arow from "../img/arow.png";


const Profile = () => {
    return ( 
        <div>
            <Navbar/>
            <div>
                <div style={{position:'relative', display:'grid', justifyItems:'center'}}>
                    <div className="banner-pro">
                        <img src={banner} alt="" />
                    </div>
                    <div className="ava-pro">
                        <img src={avaPro} alt="" />
                        <h2>Harry Benson</h2>
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
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;