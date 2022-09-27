import React, { useState }  from 'react';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';
import '../assets/css/create.css';

function CreatePage() {
    const [startDate, onChangeStart] = useState(new Date());
    const [endDate, onChangeEnd] = useState(new Date());
    const onchange = evt => {
        const [file] = document.getElementById('eventPhoto').files
        if (file) {
          document.getElementById('preview').src = URL.createObjectURL(file)
        }
      }
    let eventName = "";
    let hostName = "";
    let location = "";

    return (
      <div className="wrapper_animation">
        <h1 className="createHeader">Create an <span>Event</span>!</h1>
        <p className='createSubtitle'>Input the details, and we'll take care of the rest.</p>

        <form className='formWrapper'>
            <div className='imageInputs'>
                <img className='imagePreview' id="preview" src="#" alt="Upload an Image to Preview" />
                <label className='imageUpload' for="eventPhoto">
                    Browse...
                </label>
                <input id="eventPhoto" type="file" accept='image/*' onChange={onchange}></input>
            </div>
            
            <div className='textInputs'>
                <input id="eventNameInput" type='text' placeholder='Event Name' value={eventName}></input>
                <input id="hostNameInput" type='text' placeholder='Host Name' value={hostName}></input>
                <input id="locationInput" type='text' placeholder='Location' value={location}></input>
            </div>

            <div className='dateInputs'>
                <DatePicker className="datePickerStart" onChange={onChangeStart} value={startDate}></DatePicker>
                <DatePicker className="datePickerEnd" onChange={onChangeEnd} value={endDate}></DatePicker>
            </div>
        </form>

        <Link className='nextButton' to='/event'><span>🎉 Create my event</span></Link>
      </div>
    );
  }
  
export default CreatePage;