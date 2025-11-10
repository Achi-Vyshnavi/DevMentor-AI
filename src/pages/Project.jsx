import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import CodeEditor from '../components/CodeEditor';
import CodeReviewCard from '../components/CodeReviewCard';
import useFetchAI from '../hooks/useFetchAI';

function Project() {
  const { token, currentProjectId } = useContext(AuthContext);
  const { data: reviews, loading } = useFetchAI(
    `http://localhost:5000/api/projects/${currentProjectId}/reviews`,
    token
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Submit Code</h2>
        <CodeEditor projectId={currentProjectId} token={token} onReviewSubmit={() => {}} />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Code Reviews</h2>
        {loading ? <p>Loading...</p> : reviews && reviews.length > 0 ? (
          reviews.map((review) => <CodeReviewCard key={review._id} review={review} />)
        ) : <p>No reviews yet. Submit some code to get feedback.</p>}
      </div>
    </div>
  );
}

export default Project;
