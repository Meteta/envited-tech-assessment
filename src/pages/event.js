import '../assets/css/event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cakeImage from '../assets/Images/birthday_cake.png'
import calendarIcon from '../assets/icons/calander.svg'
import locationIcon from '../assets/icons/location.svg'

function EventPage() {
    return (
      <div className="wrapper wrapper_animation">
        <h1 className="eventHeader">Birthday Bash</h1>
        <p className='eventSubtitle'>Hosted by <b>Elysia</b></p>

        <div className='iconAndText'>
        <img className='icon' src={calendarIcon} alt='Calander Icon'></img>
            <div className='textPortion'>
                <p className='topText'>18 August 6:00PM</p>
                <p className='bottomText'>to <b>19 August 1:00PM UTC +10</b></p>
            </div>
        </div>
        <div className='iconAndText'>
        <img className='icon' src={locationIcon} alt='location Icon'></img>
            <div className='textPortion'>
                <p className='topText'>Street Name</p>
                <p className='bottomText'>Suburb, State, Postcode</p>
            </div>
        </div>
        <img className='eventImg' src={cakeImage} alt='Landing Page'/>
      </div>
    );
  }
  
export default EventPage;