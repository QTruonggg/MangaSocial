import ByGenres from '../components/ByGenres';
import ChatUser from '../components/ChatUser';
import Product from '../components/Product';
import Navbar from '../components/common/Navbar'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <div style={{display:'flex', width:'100%', padding:'32px'}}>
                <div style={{width:'25%', marginRight:'16px'}}>
                    <ByGenres/>
                </div>
                <div style={{width:'50%', margin:'0 16px'}}>
                    <Product/>
                </div>
                <div style={{width:'25%', marginLeft:'16px'}}>
                    <ChatUser/>
                </div>
            </div>
            <ToastContainer />
        </div>
     );
}
 
export default Home;