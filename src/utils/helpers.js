export const formatDate = (isoString) => new Date(isoString).toLocaleString();

export const handleError = (error) => {
  if (error.response) return error.response.data.message || 'Something went wrong';
  return 'Network error';
};
