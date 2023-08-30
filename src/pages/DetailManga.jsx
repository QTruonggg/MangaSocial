import ByGenres from "../components/ByGenres";
import ListChatUser from "../components/ChatUser";
import Navbar from "../components/common/Navbar";


const DetailManga = () => {
    return ( 
        <>
            <Navbar/>
            <div className="row " style={{padding:'32px'}} >
                <div className="col-xl-3 col-lg-3 col-md-3">
                    <ByGenres/>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-5">

                </div>
                <div className="col-xl-3 col-lg-4 col-md-4">
                    <ListChatUser/>
                </div>
            </div>
        </>
     );
}
 
export default DetailManga;