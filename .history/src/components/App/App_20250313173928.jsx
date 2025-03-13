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

  useEffect(async () => {
    console.log(page, searchTerm);
    const data = await fetchImages(topic, page);
    setImages([...images, data.results]);
  }, [page, searchTerm]);

  const handleSubmit = async (topic) => {
    try {
      setError(false);
      setIsLoading(true);
      setImages([]);
      setSearchTerm(topic);
      const data = await fetchImages(topic, page);
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
      <LoadMoreBtn images={images} handleClick={() => setPage(page + 1)} />
    </>
  );
}
