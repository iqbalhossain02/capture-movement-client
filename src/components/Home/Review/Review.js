import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
   const [reviewData, setReviewData] = React.useState([])
   const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        fetch("https://powerful-badlands-46047.herokuapp.com/reviews")
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setReviewData(data)})
    }, [])
    return (
        <div className="container">
            <h1 className="text-center mt-5">User Review</h1>
            <div className="row">
            {loading &&   <Spinner className="my-5" animation="grow" variant="primary" />}
                {
                    reviewData.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;