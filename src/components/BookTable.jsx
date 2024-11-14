import React from "react";
import './BookTable.css';

class BookTable extends React.Component {
    render () {
        return (
            <div id="book-table" className="frame4">
                <div className="book-table">
                    <li>Book Now</li>
                    <h1>BOOK YOUR TABLE</h1>
                    <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                    <form className="booking-form" >
                        <div className="inputs">
                            <input type="text" name="name" placeholder="Your name *" required/>
                            <input type="email" name="email" placeholder="Your Email" required/>
                        </div>
                        <div className="inputs">
                            <input type="date" name="date" placeholder="Reservation Date" required/>
                            <input type="number" name="people" placeholder="Total People" min={1} required/>
                        </div>
                        <textarea name="Message" placeholder="Message" ></textarea>
                        <button type="submit">Book Now</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookTable;