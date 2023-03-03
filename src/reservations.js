import { React, useEffect, useState } from "react";
import App from "./App";
import classes from "./Reservations.css";

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

export default function Reservations({ onCloseLayout }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState("");
  const [choosedTime, setChoosedTime] = useState("");
  const [choosedDate, setChoosedDate] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [personError, setPersonError] = useState(false);
  const [choosedTimeError, setChoosedTimeError] = useState(false);
  const [choosedDateError, setChoosedDateError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const buttonTextResume = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
      return () => {
        clearTimeout(buttonTextResume);
      };
    }
  }, [isSubmitted]);

  function onSubmitReservationHandlerByShihFengHsu(e) {
    e.preventDefault();

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
      new Date(choosedDate).getFullYear() < new Date().getFullYear() ||
      new Date(choosedDate).getMonth() < new Date().getMonth() ||
      new Date(choosedDate).getDate() < new Date().getDate() ||
      !new Date(choosedDate)
    ) {
      setChoosedDateError(true);
      hasError = true;
    }

    if (
      // typeof +choosedTime.split(":")[0] !== "number" ||
      // typeof +choosedTime.split(":")[1] !== "number" ||
      // +choosedTime.split(":")[0] > 12 ||
      // +choosedTime.split(":")[0] ||
      // +choosedTime.split(":")[1] > 60 ||
      // +choosedTime.split(":")[1] < 0
      !timeOptions.includes(choosedTime)
    ) {
      setChoosedTimeError(true);
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
    setChoosedDateError(false);
    setChoosedTimeError(false);
    const choosedHour = +choosedTime.split(":")[0];
    const choosedMinute = +choosedTime.split(":")[1];

    const combinedDateHourAndMinute = new Date(choosedDate).setHours(
      choosedHour,
      choosedMinute
    );
    const reservedTime = new Date(combinedDateHourAndMinute);

    console.log({ name, email, person, reservedTime });
    //Fetch Data to the Back-End Server or API...

    setName("");
    setEmail("");
    setPerson("");
    setChoosedTime("");
    setChoosedDate("");
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
    <article className='reservationsContainer'>
      <div className='bgLayout'></div>
      <form
        className='form'
        onSubmit={onSubmitReservationHandlerByShihFengHsu}
      >
        <button
          type="button"
          onClick={() => {
            return <a href="./home">Home</a>;
          }}
          className='closeBtn'
        >
          ✕Close
        </button>
        <h1>Book a Table!</h1>
        {/*Name Input*/}
        <label htmlFor="name">Your Name</label>
        <input
          required
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={nameCheckHandler}
        />
        {nameError && (
          <p className='inputError'>Name must not be empty</p>
        )}

        {/*Email Input*/}
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={emailCheckHandler}
        />
        {emailError && (
          <p role="alert" className={classes.inputError}>
            Invalid Email
          </p>
        )}

        {/*Person Selector*/}
        <label htmlFor="personByShihFengHsu">Table Size</label>
        <select
          required
          id="personByShihFengHsu"
          name="person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        >
          <option disabled value="">
            Choose...
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
          value={choosedDate}
          onChange={(e) => setChoosedDate(e.target.value)}
        />
        {choosedDateError && (
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
          value={choosedTime}
          onChange={(e) => setChoosedTime(e.target.value)}
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
        {choosedTimeError && (
          <p className='inputError'>
            Please Choose one of the options.
          </p>
        )}

        {isSubmitted ? (
          <p style={{ fontSize: "2rem" }}>Submit Reservation Success!</p>
        ) : (
          <input
            type="submit"
            value="Submit"
            title="submitButton"
            className='btn'
          />
        )}
      </form>
    </article>
  );
}

{/*const Reservations = () => {
  return (
    <div>
      <h1>Welcome to the booking page!</h1>
    </div>
  )
}

export default Reservations*/}