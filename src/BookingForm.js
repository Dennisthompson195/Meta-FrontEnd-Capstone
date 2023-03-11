import { React, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "./App";
import classes from "./Reservations.css";
import Menu from "./Menu";
import './Reservations.css'
import Confirmation from "./Confirmation";

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

const occassionOptions = [
  'occassion',
  'birthday',
  'engagement',
  'anniversary',
  'work meeting'
]
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

const BookingForm = ({ onCloseLayout }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState("");
  const [Time, setTime] = useState("");
  const [newDate, setnewDate] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [personError, setPersonError] = useState(false);
  const [TimeError, setTimeError] = useState(false);
  const [DateError, setDateError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const buttonTextResume = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => {
        clearTimeout(buttonTextResume);
      };
    }
  }, {isSubmitted});

  function onSubmitReservation(e) {
    e.preventDefault();
    alert('sucessfully Reserved a Table!')

    let hasError = false;

    if (name.trim().length === 0) {
      setNameError(true);
      hasError = true;
    }

    if (email.trim().length === 0 || !email.includes("@")) {
      setEmailError(true);
      hasError = true;
    }

    if (!personOptions.includes(person)) {
      setPersonError(true);
      hasError = true;
    }

    if (
      new Date(Date).getFullYear() < new Date().getFullYear() ||
      new Date(Date).getMonth() < new Date().getMonth() ||
      new Date(Date).getDate() < new Date().getDate() ||
      !new Date(Date)
    ) {
      setDateError(true);
      hasError = true;
    }

    if (
      // typeof +choosedTime.split(":")[0] !== "number" ||
      // typeof +choosedTime.split(":")[1] !== "number" ||
      // +choosedTime.split(":")[0] > 12 ||
      // +choosedTime.split(":")[0] ||
      // +choosedTime.split(":")[1] > 60 ||
      // +choosedTime.split(":")[1] < 0
      !timeOptions.includes(Time)
    ) {
      setTimeError(true);
      hasError = true;
    }

    if (hasError) {
      alert("Invaild input! Please check the error message.");
      setIsSubmitted(false);
      return;
    }

    /*If data is valid, then go to the next step*/

    setNameError(false);
    setEmailError(false);
    setPersonError(false);
    setDateError(false);
    setTimeError(false);
    const Hour = +Time.split(":")[0];
    const Minute = +Time.split(":")[1];

    const combinedDateHourAndMinute = new Date(newDate).setHours(
      Hour,
      Minute
    );
    const reservedTime = new Date(combinedDateHourAndMinute);

    console.log({ name, email, person, reservedTime });
    //Fetch Data to the Back-End Server or API...

    setName("");
    setEmail("");
    setPerson("");
    setTime("");
    setnewDate("");
    setIsSubmitted(true);
  }

  function emailCheckHandler() {
    if (email.trim().length === 0 || !email.includes("@")) {
      setEmailError(true);
    }
  }

  function onCloseLayout () {
    return null
  }

  function nameCheckHandler() {
    if (name.trim().length === 0) {
      setNameError(true);
    }
  }
  function personCheckHandler() {
    if (!personOptions.includes(person)) {
      setPersonError(true);
    }
  }

  return (
    <article>
      <div></div>
      <form
        className='form'
        onSubmit={onSubmitReservation}
      >
        <button
          type="button"
          className='closeBtn'
        ><Link to ='/'><img src='./images/icons_assets/home icon.svg' height={40} alt='logo' className="homeIcon" /></Link>
        </button>
        <h1>Reserve a Table</h1>
        {/*Name Input*/}
        <label htmlFor="name">Name</label>
        {nameError && (
          <p className='inputError'>Name must not be empty</p>
        )}
        <input
          required
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={nameCheckHandler}
        />
        

        {/*Email Input*/}
        <label htmlFor="email">Email</label>
        {emailError && (
          <p role="alert" className='inputError'>
          <span>.</span>Please enter a valid email
          </p>
        )}
        <input
          required
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={emailCheckHandler}
        />
        

        {/*Person Selector*/}
        <label htmlFor="person">Table Size</label>
        <select
          required
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
        {personError && (
          <p className='inputError'>
            Please Choose one of the options.
          </p>
        )}

        {/*Date Input*/}
        <label htmlFor="date">Date</label>
        <input
          required
          id="date"
          name="date"
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          value={newDate}
          onChange={(e) => setnewDate(e.target.value)}
        />
        {DateError && (
          <p className='inputError'>
            Invalid Date, please choose a date after Today!
          </p>
        )}

        {/*Time Selector*/}
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
        <label htmlFor="time">Occassion</label>
        <select
          required
          id="time"
          name="time"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option disabled value="">
            optional
          </option>
          ;
          {occassionOptions.map((time, i) => {
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
        

        {isSubmitted ? (
          <p style={{ fontSize: "2rem" }}>{<Confirmation />}</p>
        ) : (
          <button className="submitBtn">Submit</button>
        )}
      </form>
    </article>
  );
}

export default BookingForm

{/*const Reservations = () => {
  return (
    <div>
      <h1>Welcome to the booking page!</h1>
    </div>
  )
}

export default Reservations*/}