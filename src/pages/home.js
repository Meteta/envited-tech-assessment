import { Link } from 'react-router-dom';
import '../assets/css/home.css';
import landingPageImage from '../assets/Images/landing_page_image.svg'

function HomePage() {
    return (
      <div className="wrapper wrapper_animation">
        <h1 className="landingHeader">Imagine if <span className='emphasisText'>Snapchat</span> had events</h1>
        <p className='landingSubtitle'>Easily host and share events with your friends across any social media.</p>
        <img className='applicationImg' src={landingPageImage} alt='Landing Page'/>
        <Link className='createEvent' to='/create'><span>🎉 Create my event</span></Link>
      </div>
    );
  }
  
export default HomePage;