import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import swal from "sweetalert";

const Booking = () => {
  const[loggedInUser] = useContext(UserContext)
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(null)
  console.log(paymentSuccess)
  console.log(booking)

  useEffect(() => {
    fetch(`https://powerful-badlands-46047.herokuapp.com/bookingById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, [id]);


const handleSubmitBooking = () => {
  const bookingData = {
    name: loggedInUser.name,
    email: loggedInUser.email,
    serviceName : booking.name,
    description: booking.description,
    paymentMethod : "credit card",
    status : "pending",
    image : booking.img ,
    paymentDetails : paymentSuccess || "Your Payment is incomplete"
  }


  fetch("https://powerful-badlands-46047.herokuapp.com/addBooking", {
    method : "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bookingData)
  })
  .then(response => response.json())
  .then(data =>{
    if(data){
      swal("Good Job!", "Your Booking is success", "success");
    }
    else{
      swal("Opppsss!", "something wrong", "error");
    }
  })
}

  return (
    <div>
      <h2 className="text-center">Thanks for choose this service</h2>
      <h3 className="text-center mb-5"> Please give the data and pay payment for book your services</h3>
      <div style={{width : '450px'}} className="m-auto">
      <form className="from-group">
      <input
        id="name"
          name="name"
          type="text"
          class="form-control mb-2 border-primary rounded w-100"
          value={loggedInUser.name}
        />
        <input
        id="email"
         name="name"
          type="text"
          class="form-control mb-2 border-primary rounded w-100"
          value={loggedInUser.email}
        />
        <input
        id="serviceName"
         name="serviceName"
          type="text"
          class="form-control mb-2 border-primary rounded w-100"
          value={booking.name}
        />
        <input
        id="price"
        name="price"
          type="price"
          class="form-control mb-2 border-primary rounded w-100"
          value={"$"+booking.price}
        /> <br/>
      </form>

    <ProcessPayment paymentSuccess={paymentSuccess} setPaymentSuccess={setPaymentSuccess} /> <br/>
      <button type="submit" onClick={handleSubmitBooking} class="btn btn-primary text-center w-50 mb-5">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Booking;
