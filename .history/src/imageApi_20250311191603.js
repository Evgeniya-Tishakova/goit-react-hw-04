import axios from "axios";

export const fetchImages = async (cat) => {
  const response = await axios.get("https://api.unsplash.com/photos", {
    params: {
      username: cat,
      client_id: "wF3w9nwRAt8AqJ_cDgqvuS34sl94P7CLhUifSsy_E9U",
      per_page: 9,
    },
  });

  return response.data;
};
