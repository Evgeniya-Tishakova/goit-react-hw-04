import { useEffect, useState } from "react";
import { fetchImages } from "../../imageApi.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
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
      setIsLoading(true);
      setImages([]);
      const data = await fetchImages(topic);
      console.log(data);
      setImages(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <b>Sorry, there was an error, please reload...</b>}
      {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
    </>
  );
}
