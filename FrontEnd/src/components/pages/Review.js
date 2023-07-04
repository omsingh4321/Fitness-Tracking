import React, { useState } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create new review object
    const newReview = {
      name: name,
      rating: rating,
      comment: comment,
      time: getTime(),
    };

    // Update reviews array
    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Reset form fields
    setName('');
    setRating('');
    setComment('');
  };

  const getTime = () => {
    const currDate = new Date();
    let hr = currDate.getHours();
    let min = currDate.getMinutes();
    let sec = currDate.getSeconds();
    let tellme = false;

    if (hr >= 12) {
      hr = hr % 12;
      if(hr===0) hr=12;
      tellme = true;
    }

    let h = hr < 10 ? '0' + hr : hr;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;

    return tellme ? h + ':' + m + ':' + s + ' PM' : h + ':' + m + ':' + s + ' AM';
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '20px' }}>
    
      <form id="reviewForm" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <h2>Write a Review</h2>
        <label htmlFor="name" style={{ fontWeight: 'bold', display: 'block' }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
        /><br /><br />
        <label htmlFor="rating" style={{ fontWeight: 'bold', display: 'block' }}>
          Rating:
        </label>
        <select
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required
          style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
        >
          <option value="">-- Select Rating --</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select><br /><br />
        <label htmlFor="comment" style={{ fontWeight: 'bold' }}>Comment:</label><br />
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
          style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
        ></textarea><br /><br />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      <h1 style={{ textAlign: 'center' }}>Customer Reviews</h1>

<div id="reviews" style={{ marginTop: '20px' }}>
  {reviews.map((review, index) => (
    <div
      key={index}
      style={{ margin: '20px', border: '1px solid #ccc', padding: '10px',height:'15vh' }}
    >
      <p style={{ margin: '0' }}>
        <strong>Name:</strong> {review.name}
        <br />
        <strong>Rating:</strong> {review.rating}
        <br />
        <strong>Comment:</strong> {review.comment}
        <br />
        <strong>Time:</strong> {review.time}
      </p>
    </div>
  ))}
</div>


    </div>
  );
};

export default Review;
