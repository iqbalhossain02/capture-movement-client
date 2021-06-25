import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageService = () => {
    const [service, setService] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {     
        fetch("https://powerful-badlands-46047.herokuapp.com/services")
          .then((response) => response.json())
          .then((data) => {
            setService(data)
            setLoading(false);
         
          });
      }, [service]);

      const handleDelete = (id) => {
          fetch(`https://powerful-badlands-46047.herokuapp.com/delete/${id}`, {
              method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
            if(data){
              swal("Good Job!", "service successfully deleted", "success");
            }
          })
      }
    return (
        <div className="text-center">
            <h3>Manage services</h3>
            <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>seral</th>
            <th>Name</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        {loading &&   <Spinner className="my-5" animation="grow" variant="primary" />}
        {service.map((service, index) =>
        <tbody>
          <tr>
            <td>{index + 1}</td>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td><button onClick={() => handleDelete(service._id)} className="btn btn-danger">DELETE</button></td>
          </tr>
        </tbody>)}
      </Table>
        </div>
    );
};

export default ManageService;