import React from "react";

const BookingDisplay = (props) => {

    const deleteHandler = () => {
        props.onDeleteBtn(props.id);
    }

    return (
        <li onClick={deleteHandler}>{props.children}</li>
    );
}

export default BookingDisplay;