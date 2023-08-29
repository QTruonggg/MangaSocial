import ByGenres from "../components/ByGenres";
import ListChatUser from "../components/ChatUser";
import Navbar from "../components/common/Navbar";


const DetailManga = () => {
    return ( 
        <>
            <Navbar/>
            <div style={{display:'flex', width:'100%', padding:'32px'}}>
                <div style={{width:'25%', marginRight:'16px'}}>
                    <ByGenres/>
                </div>
                <div style={{width:'50%', margin:'0 16px'}}>
                    
                </div>
                <div style={{width:'25%', marginLeft:'16px'}}>
                    <ListChatUser/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="">

                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DetailManga;