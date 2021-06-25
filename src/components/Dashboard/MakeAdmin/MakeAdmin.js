import React from "react";
import { useForm } from 'react-hook-form';
import swal from "sweetalert";

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminData = {
            name: data.name,
            email: data.email
        }
        fetch("https://powerful-badlands-46047.herokuapp.com/makeAdmin", {
            method: "POST",
            headers: { 'Content-Type' : 'application/json'},
            body : JSON.stringify(adminData)
        })
        .then(res => res.json())
        .then(success => {
          if(success){
            swal("Great!", "Admin has successfully added", "success");
          }else{
            swal("Opppsss!", "something wrong", "error");
          }
        })
    }

  return (
    <div>
      <h3 className="text-center py-4">Make a admin given the bellow data</h3>
      <div className="m-auto" style={{width : '350px'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <strong>Name  : </strong>
      <input className="mb-3 border-primary rounder-lg" placeholder="Enter Admin Name" {...register("name", { required: true })} />
      {errors.name && <span className="text-danger">name field is required</span>} <br/>
      <strong>Email : </strong>
      <input className="mb-3 border-primary rounder-lg" placeholder="Enter Admin Email address" {...register("email", { required: true })} /> 
      {errors.email && <span className="text-danger">Must Add a Email</span>} <br/>
      
      <input className="btn btn-primary mt-3" type="submit" />
    </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
