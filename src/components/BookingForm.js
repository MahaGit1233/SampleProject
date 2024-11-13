import React, { useState } from "react";

const BookingForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredSeat, setEnteredSeat] = useState('');
    const [isValid, setIsValid] = useState(true);

    const nameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredName(event.target.value);
    }

    const seatChangeHandler = (event) => {
        if (event.target.value > 0) {
            setIsValid(true);
        }
        setEnteredSeat(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredSeat <= 0) {
            setIsValid(false);
            return;
        }
        props.onSaveData(enteredName, enteredSeat);
        setEnteredName('');
        setEnteredSeat('');
    }

    return (
        <form onSubmit={formSubmitHandler} style={{ fontFamily: "Times New Roman" }}>
            <div>
                <label htmlFor="name">User Name:</label>
                <input id="name" type="text" onChange={nameChangeHandler} value={enteredName}/>
                <label htmlFor="seat">Seat Number:</label>
                <input id="seat" type="number" onChange={seatChangeHandler} value={enteredSeat}/>
                <button type="submit">Add</button>
            </div>
            {props.totalBookings===0 && <h1 style={{fontFamily:"Times New Roman"}}>Nothing Present</h1>}
        </form>
    );
}

export default BookingForm;