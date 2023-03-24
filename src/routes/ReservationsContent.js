import React, {useState} from 'react';
import "../styles/ReservationsContent.css";

function ReservationsContent() {

    const [Time, setTime] = useState("");
    const [TimeError, setTimeError] = useState(false);
    const [person, setPerson] = useState("");

    const timeOptions = [
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM ",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
        "9:30 PM",
    ];
    
    const personOptions = [
        "1 person",
        "2 people",
        "3 people",
        "4 people",
        "5 people",
        "6 people",
        "7 people",
        "8 people",
      ];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        occasion: "",
        guests: "",
        date: "",
    })

    const [formError, setFormError] = useState({})

    const changeHandler = (event) => {
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}
        if (formData.name === "") {
            err.name = "* Full name is required" 
        }
        if (formData.email === "") {
            err.email = "* Email address is required" 
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(formData.email)) {
                err.email = "Email is not valid"
            }
        }


        if (formData.telephone === "") {
            err.telephone = "* Phone number is required" 
        }else{
            let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            if(!phoneRegex.test(formData.telephone)) {
                err.telephone = "Telephone number is not valid"
            }
        }


        if (formData.guests === "") {
            err.guests = "* Please specify number of guests" 
        }
        if (formData.date === "") {
            err.date = "* Please specify time" 
        }

        setFormError({...err})
        return Object.keys(err).length < 1;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.table(formData)

        let isValid = validateForm()
        if(isValid) {
            alert("Submitted")
        }
    }

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className='bookingHeader'>
        <div>
        <div className='resHead'>
      <h1 className='resLL'>Little Lemon</h1>
      
      <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist. 
          The restaurant has a rustic and relaxed atmosphere with moderate prices,
          making it a popular place for a meal any time of the day.
        </p>
        </div>
        </div>
    </div>
            <div className="formss">
                <h1>Reserve a Table</h1>
                <form onSubmit={submitHandler}>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                onChange={changeHandler}
                            />
                            <span className="non-valid">{formError.name}</span>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="Email@example.com"
                                name="email"
                                onChange={changeHandler}
                            />
                            <span className="non-valid">{formError.email}</span>
                        </div>
                        <div className="field">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="tel"
                                placeholder="(xxx) xxx-xxxx"
                                name="telephone"
                                onChange={changeHandler}
                            />
                            <span className="non-valid">{formError.telephone}</span>
                        </div>
                        <div className="field">
                                <label htmlFor="date">Date</label>
                                <input 
                                    type="date" 
                                    name="date"
                                    onChange={changeHandler}
                                />
                                <span className="non-valid">{formError.date}</span>
                            </div>
                        <div className="field">
                        <label htmlFor="time">Time</label>
        <select
        required
          id="time"
          name="time"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option disabled value="">
            {" "}
            -- : --{" "}
          </option>
          ;
          {timeOptions.map((time, i) => {
            return (
              <option key={i} value={time}>
                {time}
              </option>
            );
          })}
        </select>
        {TimeError && (
          <p className='inputError'>
            Please Choose one of the options.
          </p>
        )}
                            </div>
                            <div className="guestsdate">
                            <div className="field occasion">
                                <label htmlFor="occasion">Occasion (optional)</label>
                                <div className="options">
                                    <select name="occasion" onChange={changeHandler}>
                                        <option value="select">Select occasion</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="engagement">Engagement</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="meeting">Meeting</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field guest">
                            <label htmlFor="person">Table Size</label>
        <select
          id="person"
          name="person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        >
          <option disabled value="">
            choose...
          </option>
          ;
          {personOptions.map((opt, i) => {
            return (
              <option key={i} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
                                <span className="non-valid">{formError.guests}</span>
                            </div>
                            
                        </div>
                        <div className="field">
                                <label htmlFor="comments ">Comments or accomodation requests (optional)</label>
                                <textarea 
                                    type="time" 
                                    name="date"
                                    onChange={changeHandler}
                                    rows={5}
                                    className='comments'
                                />
                                <span className="non-valid">{formError.date}</span>
                            </div>
                        <button className="reserve-btn" type="submit">Book Now</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReservationsContent