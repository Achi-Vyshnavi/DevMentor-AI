import React, { useState } from 'react';
import { submitCodeForReview } from '../api';
import Loader from './Loader';

function CodeEditor({ projectId, token, onReviewSubmit }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await submitCodeForReview(code, projectId, token);
      onReviewSubmit(res.data);
    } catch (err) {
      console.error('Error submitting code:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="border rounded p-4 w-full h-64 font-mono text-sm"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? <Loader /> : 'Submit for AI Review'}
      </button>
    </div>
  );
}

export default CodeEditor;
