import ByGenres from '../components/ByGenres';
import ChatUser from '../components/ChatUser';
import Product from '../components/Product';
import Navbar from '../components/common/Navbar'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <div className='row' style={{ padding:'32px', margin:'0'}}>
                <div className='col-xxl-3 col-xl-3 col-lg-3' style={{ paddingRight:'16px', marginBottom:'24px'}}>
                    <ByGenres/>
                </div>
                <div className='col-xxl-6 col-xl-5 col-lg-5' style={{ padding:'0 16px'}}>
                    <Product/>
                </div>
                <div className='col-xxl-3 col-xl-4 col-lg-4' style={{ paddingLeft:'16px'}}>
                    <ChatUser/>
                </div>
            </div>
            <ToastContainer />
        </div>
     );
}
 
export default Home;