import React from 'react';

function CodeReviewCard({ review }) {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{review.title || 'Code Feedback'}</h3>
        <span className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleString()}</span>
      </div>
      <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{review.suggestion}</pre>
      <div className="mt-2 flex flex-wrap gap-2">
        {review.tags?.map((tag, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CodeReviewCard;
