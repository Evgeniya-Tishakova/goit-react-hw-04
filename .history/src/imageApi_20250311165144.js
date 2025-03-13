import axios from "axios";

export const fetchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/");
};
