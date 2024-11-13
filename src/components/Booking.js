import React from "react";
import BookingDisplay from "./BookingDisplay";

const Booking = (props) => {
    let Delete = (<button onClick={props.onDelete}>Delete</button>);
    let Edit = (<button onClick={props.onEdit}>Edit</button>)

    return (
        <ul>
            {props.books.map(booking => (
                <BookingDisplay key={booking.id} id={booking.id} onDeleteBtn={props.onDelete}>{booking.name} {booking.seat} {Delete} {Edit}</BookingDisplay>
            ))}
        </ul>
    );
}

export default Booking;