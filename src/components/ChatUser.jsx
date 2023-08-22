import './css/ChatUser.css'
import ava from '../img/ava.png'
import send from '../img/send.png'
import onl from '../img/onl.png'
import React, { useState } from 'react';

const ListChatUser = () => {

    const [activeTab, setActiveTab] = useState(''); 
    
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    return ( 
        <div className='user'>
            <div className="title-user">
                <button onClick={() => handleTabClick('chat')} style={{width:'20%'}}>Chat</button>
                <button onClick={() => handleTabClick('read')} style={{width:'20%'}}>Read</button>
                <button onClick={() => handleTabClick('online')} style={{width:'25%'}}>Online</button>
                <button onClick={() => handleTabClick('newUsers')} style={{width:'35%'}}>New Users</button>
            </div>

            <div className='list-chat' style={{ display: activeTab === 'chat' ? 'block' : 'none' }}>
                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>It has a unique art style with exaggerated expressions and action sequences.</p>
                    </div>
                </div>

                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>It has a unique art style with exaggerated expressions and action sequences.</p>
                    </div>
                </div>

                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div style={{display:'grid', paddingLeft:'20px', width:'85%'}}>
                        <b>Wade Warren</b>
                        <p style={{margin:'0'}}>It has a unique art style with exaggerated expressions and action sequences.</p>
                    </div>
                </div>

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
                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div className='user-onl'>
                        <b>Wade Warren</b>
                        <img src={onl} alt="" />
                    </div>
                </div>
                <div className='list-user'>
                    <div style={{width:'15%'}}>
                        <img src={ava} alt=""  style={{width:'100%'}}/>
                    </div>
                    <div className='user-onl'>
                        <b>Brooklyn Simmons</b>
                        <img src={onl} alt="" />
                    </div>
                </div>

                
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