import { useEffect, useState } from "react";
import { fetchImages } from "../../imageApi.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";

export default function App() {
  const [images, setImages] = useState([]);

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
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Loader />
      <ImageGallery images={images}></ImageGallery>
    </>
  );
}
