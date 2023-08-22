import './css/Product.css'
import imgpro from '../img/product.png'
import union from '../img/Union.png'
import mess from '../img/Message.png'
import vector from '../img/Vector.png'

const Product = () => {
    return ( 
        <div className="product">
            <div className='list-product'>
                <div style={{width:'70%'}}>
                    <img src={imgpro} alt="" style={{width:'100%', borderRadius:'15px'}}/>
                    <div className='name-product'>
                        <div className='name'>
                            <h5>Sakamoto Days</h5>
                            <h6>Nami Sano</h6>
                        </div>
                        <div>
                            <i class="fa-regular fa-heart" style={{fontSize:'24px'}}></i>
                        </div>
                    </div>
                </div>
                <div className='icon-btn'>
                    <button><img src={union} alt="" /></button>
                    <button><img src={mess} alt="" /></button>
                    <button><img src={vector} alt="" /></button>
                </div>

            </div>
            
            <div className='list-product'>
                <div style={{width:'70%'}}>
                    <img src={imgpro} alt="" style={{width:'100%', borderRadius:'15px'}}/>
                    <div className='name-product'>
                        <div className='name'>
                            <h5>Sakamoto Days</h5>
                            <h6>Nami Sano</h6>
                        </div>
                        <div>
                            <i class="fa-regular fa-heart" style={{fontSize:'24px'}}></i>
                        </div>
                    </div>
                </div>
                <div className='icon-btn'>
                    <button><img src={union} alt="" /></button>
                    <button><img src={mess} alt="" /></button>
                    <button><img src={vector} alt="" /></button>
                </div>

            </div>

            <div className='list-product'>
                <div style={{width:'70%'}}>
                    <img src={imgpro} alt="" style={{width:'100%', borderRadius:'15px'}}/>
                    <div className='name-product'>
                        <div className='name'>
                            <h5>Sakamoto Days</h5>
                            <h6>Nami Sano</h6>
                        </div>
                        <div>
                            <i class="fa-regular fa-heart" style={{fontSize:'24px'}}></i>
                        </div>
                    </div>
                </div>
                <div className='icon-btn'>
                    <button><img src={union} alt="" /></button>
                    <button><img src={mess} alt="" /></button>
                    <button><img src={vector} alt="" /></button>
                </div>

            </div>
            
        </div>
     );
}
 
export default Product;