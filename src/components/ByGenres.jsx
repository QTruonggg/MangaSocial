import React, { useState, useEffect } from 'react';
import './css/ByGenres.css'
import axiosInstance from '../utils/axiosInstance';


const ByGenres = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        axiosInstance('category_home', 'GET', null, {'Link-Full': 'https://ww6.manganelo.tv/home'})
            .then(response => {
                console.log("call api category");
                setCategories(response.data);
                console.log("api category: "+ response.data);
                console.log(categories.category_home);
            })
            .catch(error => {
                console.log("lỗi category");
                console.error('Error fetching categories:', error);
            });
    }, []);


    return ( 
        <div >
            <div className="title-Genres">
                By Genres
            </div>
            <div className='list-Genres'>
                <div className='time'>
                    <h4>TIME</h4>
                    <button>Lastest</button>
                    <button>Newest</button>
                    <button>Topview</button>
                </div>
                <div style={{width:'70%', height:'1px',marginBottom:'12px' ,backgroundColor:'#F48611'}}></div>
                <div className='condition'>
                    <h4>CONDITION</h4>
                    <button>All</button>
                    <button>Complete</button>
                    <button>On Going</button>
                    
                </div>
                <div style={{width:'70%', height:'1px',marginBottom:'12px' ,backgroundColor:'#F48611'}}></div>
                <div className='category'>
                    <h4>CATEGORY</h4>

                    {/* {categories.map(category => (
                        <button key={category.id}>{category.name}</button>
                    ))} */}
                    <button>All</button>
                    <button>Action</button>
                    <button>Adventure</button>
                    <button>Comedy</button>
                    <button>Cooking</button>
                    
                </div>
            </div>
        </div>
     );
}
 
export default ByGenres;