import React, { useState, useEffect, useContext } from 'react';
import CodeEditor from '../components/CodeEditor';
import CodeReviewCard from '../components/CodeReviewCard';
import { fetchProjectReviews } from '../api';
import { AuthContext } from '../context/AuthContext';

function Dashboard() {
  const { token, currentProjectId } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => setReviews([review, ...reviews]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetchProjectReviews(currentProjectId, token);
      setReviews(res.data);
    };
    fetchReviews();
  }, [currentProjectId, token]);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Submit Your Code</h2>
        <CodeEditor projectId={currentProjectId} token={token} onReviewSubmit={handleReviewSubmit} />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Code Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet. Submit code to get AI suggestions!</p>
        ) : (
          reviews.map((review) => <CodeReviewCard key={review._id} review={review} />)
        )}
      </div>
    </div>
  );
}

export default Dashboard;
