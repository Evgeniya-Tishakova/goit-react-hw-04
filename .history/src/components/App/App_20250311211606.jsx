import { useEffect, useState } from "react";
import { fetchImages } from "../../imageApi.js";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function App() {
  const [clicks, setClicks] = useState([]);

  // useEffect(() => {
  //   console.log(clicks);
  //   async function getImage() {
  //     try {
  //       const data = await fetchImages();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getImage();
  // }, [clicks]);

  const handleSubmit = async (topic) => {
    try {
      const data = await fetchImages(topic);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images}></ImageGallery>
    </>
  );
}
