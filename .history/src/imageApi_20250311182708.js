import axios from "axios";

export const fetchImages = async (cat) => {
  const response = await axios.get("https://api.unsplash.com/photos", {
    params: {
      query: cat,
      key: "Kk4IsDqH656KEG9w_MOhcd0IEWGILFLwzJFFo1oOOgY",
      per_page: 9,
    },
  });

  return response.data.hits;
};
