import React, { useEffect, useState } from "react";
import { Table, Form, Spinner } from "react-bootstrap";
import swal from "sweetalert";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://powerful-badlands-46047.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) =>{ 
        setLoading(false);
        setOrders(data)});
  }, [orders]);

  const handleChange = (e, id) => {

    fetch(`https://powerful-badlands-46047.herokuapp.com/update/${id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ 
        status : e.target.value
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        swal("Nice work!", "Status has been changed", "success");
      }
    })
  }
  return (
    <div className="text-center">
      <h3 className="mt-3">Total Order {orders.length}</h3>
      <div></div>
      <Table striped bordered hover responsive size-lg>
        <thead>
          <tr>
            <th>seral</th>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Pay With</th>
            <th>Status</th>
          </tr>
        </thead>
        {loading &&   <Spinner className="my-5" animation="grow" variant="primary" />}
        {orders.map((order, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.serviceName}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control  onChange={(e) => handleChange(e, order._id)} as="select" custom>
                    <option>{order.status}</option>
                    <option value='pending'>Pending</option>
                    <option  value='on going'>On Going</option>
                    <option  value='Done'>Done</option>
                  </Form.Control>
                </Form.Group>
                </Form>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default OrderList;
