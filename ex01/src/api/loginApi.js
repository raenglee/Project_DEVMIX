import axios from 'axios';

const url = 'http://localhost:8080';

export const login = async (code) => {
  try {
    const res = await axios.get(`${url}?token=${code}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
