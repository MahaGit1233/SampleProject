import React from "react";
import BookingDisplay from "./BookingDisplay";

const Slot = (props) => {
    const changeHandler = (event) => {
        const enteredSeat=event.target.value;
        const seatExists=props.Bookings.some((booking)=>booking.seat===enteredSeat);

        if (seatExists) {
            props.onChangeFilter(enteredSeat);
        }
    }
    return (
        <div style={{textAlign:"center",fontFamily:"Times New Roman"}}>
            <label htmlFor="slot">Find Slot:</label>
            <input id="slot" type="number" onChange={changeHandler}/>
        </div>
    );
}

export default Slot;