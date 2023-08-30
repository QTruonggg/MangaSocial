import Navbar from "../components/common/Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import union from '../img/Union.png'
import mess from '../img/Message.png'


function DetailManga() {
  const location = useLocation()
  const { poster, title, authorHome, urlManga, homenelo } = location.state || {};

  console.log('searchResultsObj', poster, title, authorHome, urlManga)
  console.log('homenelo', homenelo)

  const navigate = useNavigate()
  const handleReadNow = (link) => {
    console.log('link', link)
  }
  return (
    <div>
      <Navbar />
      <div className="">
        <div>
          <img src={poster} alt="" />
        </div>
        <div>
          <div>
            <h1>{authorHome}</h1>
            <h1>{title}</h1>
          </div>
          <div className='icon-btn'>
            <button><img src={union} alt="" /></button>
            <button onClick={() => handleReadNow(homenelo.chapter_home[0].link)}>Read now</button>
            <button><img src={mess} alt="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailManga;