import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

export const loginUser = async (credentials) => axios.post(`${API_BASE}/users/login`, credentials);
export const registerUser = async (user) => axios.post(`${API_BASE}/users/register`, user);

export const submitCodeForReview = async (codeSnippet, projectId, token) => {
  return axios.post(
    `${API_BASE}/ai/review`,
    { codeSnippet, projectId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const fetchProjectReviews = async (projectId, token) => {
  return axios.get(`${API_BASE}/projects/${projectId}/reviews`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
