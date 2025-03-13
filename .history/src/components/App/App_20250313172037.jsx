import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import { fetchImages } from "../../imageApi.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
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

  useEffect(() => {
    console.log(page, searchTerm);
  }, [page, searchTerm]);

  const handleSearch = (topic) => {
    setSearchTerm(topic);
  };

  const handleSubmit = async (topic) => {
    try {
      setError(false);
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
      {error && (
        <b className={css.error}>Sorry, there was an error, please reload...</b>
      )}
      {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
      <LoadMoreBtn page={page} onClick={handleSearch} />
    </>
  );
}
