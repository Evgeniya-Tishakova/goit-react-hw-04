import axios from "axios";

export const fetchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/photos", {
      params: {
        q: 
      key: "wF3w9nwRAt8AqJ_cDgqvuS34sl94P7CLhUifSsy_E9U",
      per_page: 9,
      orientation: landscape,
    },
  });

  return response.data.hits;
};
