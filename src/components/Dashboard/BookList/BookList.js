import React, { useContext, useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { UserContext } from "../../../App";

const BookList = () => {
  const [booking, setBooking] = useState();
  const [loggedInUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://powerful-badlands-46047.herokuapp.com/booking?email=" +
        loggedInUser.email
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setBooking(data);
      });
  }, [loggedInUser.email]);
  return (
    <div>
      <div className="row">
        {loading && (
          <Spinner className="m-auto py-5" animation="grow" variant="primary" />
        )}
        {booking?.length ? (
          booking?.map((booking) => (
            <div className="col-md-6">
              <Card style={{ height: "auto", width: "225px" }} className="m-3">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={booking.image}
                />
                <Card.Body>
                  <Card.Title>{booking.serviceName}</Card.Title>
                  <Card.Text>{booking.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <strong className="text-muted text-center">
                    Status update : {booking.status}
                  </strong>
                </Card.Footer>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-center my-5">
            <h3 className="ml-5">You have no booking</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
