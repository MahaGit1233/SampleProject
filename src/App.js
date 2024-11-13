import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import Booking from "./components/Booking";
import Slot from "./components/slot";

function App() {
  const [book, setBook] = useState([]);
  const [totalBookings, setTotalBookings] = useState(0);
  const [filteredBookings,setFilteredBookings] = useState([]);

  const saveDataHandler = (enteredName, enteredSeat) => {

    const seatExists=book.some((booking)=>booking.seat===enteredSeat);

    if (seatExists) {
      alert('This seat is already booked. Book another seat');
      return;
    }
    setBook((prevBooking) => {
      const updatedBooking = [...prevBooking];
      updatedBooking.push({ name: enteredName, seat: enteredSeat, id: Math.random().toString() });
      return updatedBooking;
    });
    setTotalBookings((prevCount) => prevCount + 1);
  };

  const delbtnHandler = (bookId) => {
    setBook((prevBooking) => {
      const updatedBooking = prevBooking.filter((book) => book.id !== bookId);
      if (updatedBooking.length < prevBooking.length) {
        setTotalBookings((prevCount) => prevCount - 1);
      }
      return updatedBooking;
    });
  };

  const editbtnHandler = () => {

  };

  const changeFilterHandler = (selectedSeat) => {
    const filtered=book.filter((booking)=>booking.seat===selectedSeat);
    setFilteredBookings(filtered);
  }

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "Times New Roman" }}>Movie Booking</h1>
        <p style={{ textAlign: "center", fontFamily: "Times New Roman" }}>Total Booked: {totalBookings}</p>
        <Slot Bookings={book} onChangeFilter={changeFilterHandler} /> <br />
        <BookingForm onSaveData={saveDataHandler} totalBookings={totalBookings} />
      </div>
      <div>
        <Booking books={filteredBookings.length > 0 ? filteredBookings : book} onDelete={delbtnHandler} onEdit={editbtnHandler} />
      </div>
    </div>
  );
}

export default App;
