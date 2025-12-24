import axios from 'axios';

export const submitMessage = async (formData) => {
  const api = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  try {
    const response = await axios.post(`${api}/messages`, formData);
    if (response.status === 201) {
      return true;
    } else {
      throw new Error('Failed to submit message');
    }
  } catch (error) {
    throw new Error('Failed to submit message');
  }
}