import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { UserContext } from "../../../App";

const UserReview = () => {
  const [loggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      email: loggedInUser.email,
      image: loggedInUser.image,
      ratting: data.ratting,
      description: data.description,
    };
    fetch("https://powerful-badlands-46047.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Thank U!", "Your Review is added", "success");
        }
      });
  };

  return (
    <div>
      <h3 className="text-center py-4">Please Give us your feedback</h3>
      <div style={{ width: "400px" }} className="m-auto">

        <form onSubmit={handleSubmit(onSubmit)}>
          <strong>Your Name</strong>
          <br />
          <input
            className="w-100 border-info rounded"
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-danger">Name is required</span>
          )}{" "}
          <br />

          <strong>Your Opinion</strong>
          <br />
          <input
            className="w-100 border-info rounded"
            placeholder="Good/Bad/Batter/Best"
            {...register("ratting", { required: true })}
          />
          <br />
          {errors.ratting && (
            <span className="text-danger">This field is required</span>
          )}{" "}
          <br />

          <strong>Short Description : </strong>
          <br />
          <textarea
            className="w-100 border-info rounded"
            placeholder="Description"
            {...register("description", { required: true })}
          ></textarea>
          <br />
          {errors.description && (
            <span className="text-danger">
              please write a short description
            </span>
          )}{" "}
          <br />
          
          <input className="btn btn-primary mb-5" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UserReview;
