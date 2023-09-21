import './css/ByGenres.css'
import CategoryHome from './CategoryHome';


const ByGenres = () => {

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
        <div style={{ width: '70%', height: '1px', marginBottom: '12px', backgroundColor: '#F48611' }}></div>
        <div className='condition'>
          <h4>CONDITION</h4>
          <button>All</button>
          <button>Complete</button>
          <button>On Going</button>
        </div>
        <div style={{ width: '70%', height: '1px', marginBottom: '12px', backgroundColor: '#F48611' }}></div>
        <CategoryHome />
      </div>
    </div>
  );
}

export default ByGenres;