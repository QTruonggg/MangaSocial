import './css/ChatUser.css'
import ava from '../img/ava.png'
import send from '../img/send.png'
import onl from '../img/onl.png'
import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

const ListChatUser = () => {

    const [activeTab, setActiveTab] = useState(''); 
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [chatUsers, setChatUsers] = useState([]);

    
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        axiosInstance('get/api/list_online')
            .then(response => {
                // console.log("call api");
                setOnlineUsers(response.data); 
                // console.log(response.data);
            })
            .catch(error => {
                console.log("lỗi list onl");
                console.error('Error fetching online users:', error);
            });
    }, []);

    useEffect(() => {
        axiosInstance('api/last_200_comment')
            .then(response => {
                // console.log("call api comment");
                setChatUsers(response.data); 
                // console.log(response.data);
            })
            .catch(error => {
                console.log("lỗi list cmt");
                console.error('Error fetching comments:', error);
            });
    }, []);
    


    return ( 
        <div className='user'>
            <div className="title-user">
                <button onClick={() => handleTabClick('chat')} style={{width:'20%'}}>Chat</button>
                <button onClick={() => handleTabClick('read')} style={{width:'20%'}}>Read</button>
                <button onClick={() => handleTabClick('online')} style={{width:'25%'}}>Online</button>
                <button onClick={() => handleTabClick('newUsers')} style={{width:'35%'}}>New Users</button>
            </div>

            <div className='list-chat' style={{ display: activeTab === 'chat' ? 'block' : 'none' }}>

                {chatUsers.map(comment => (
                    <div className='list-user' key={comment.id_comment}>
                        <div style={{width:'15%'}}>
                            <img src={ava} alt=""  style={{width:'100%'}}/>
                        </div>
                        <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                            <b>{comment.id_user}</b>
                            <p style={{margin:'0'}}>{comment.noidung}</p>
                        </div>
                    </div>
                ))}


                <form className='send-comment'>
                    <input type="text" placeholder='Leave a comment...' />
                    <button><img src={send} alt="" /></button>
                </form>
            </div>

            <div className='list-read' style={{ display: activeTab === 'read' ? 'block' : 'none' }}>
                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>is reading Naruto.</p>
                    </div>
                </div>

                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>has saved Demon Slayer for later.</p>
                    </div>
                </div>


            </div>

            <div className='list-online' style={{ display: activeTab === 'online' ? 'block' : 'none' }}>

                {onlineUsers.map(user => (
                    <div className='list-user' key={user.id_user}>
                        <div style={{width:'15%'}}>
                            <img src={user.link_avatar} alt={user.user_name}  style={{width:'100%'}}/>
                        </div>
                        <div className='user-onl'>
                            <b>{user.user_name}</b>
                            <img src={onl} alt="" />
                        </div>
                    </div>
                ))}

            </div>

            <div className='list-users' style={{ display: activeTab === 'newUsers' ? 'block' : 'none' }}>
                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>has just joined MangaSocial.</p>
                    </div>
                </div>

                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>has just joined MangaSocial.</p>
                    </div>
                </div>

                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>has just joined MangaSocial.</p>
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default ListChatUser;