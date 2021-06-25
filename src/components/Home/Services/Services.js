import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch("https://powerful-badlands-46047.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServiceData(data);
        setLoading(false)
      });
  }, []);
  return (
    <section id="services" className="container-fluid">
      <h2 className="text-center py-4">This Services We Provide</h2>
      <div className="row">
        {loading && (
          <div className="m-auto">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <h3 className="float-right ml-1">Loading...</h3>
          </div> 
        )}
        {serviceData?.map((service) => (
          <ServiceDetails key={service._id} service={service}></ServiceDetails>
        ))}
      </div>
    </section>
  );
};

export default Services;
