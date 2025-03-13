import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import { fetchImages } from "../../imageApi.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModal, setIsModal] = useState(false);


  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    async function getData(searchTerm, page) {
      try {
        setError(false);
        setIsLoading(true);
        setSearchTerm(searchTerm);
        const data = await fetchImages(searchTerm, page);
        console.log(data);
        setImages((prevImages) => [...prevImages, ...data.results]); // [1,2,3,4]
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData(searchTerm, page);
    console.log(page, searchTerm);
  }, [page, searchTerm]);

  const handleSearch = (topic) => {
    setSearchTerm(topic);
    setPage(1);
    setImages([]);
  };

  // const handleSubmit = async (topic) => {
  //   try {
  //     setError(false);
  //     setIsLoading(true);
  //     setImages([]);
  //     setSearchTerm(topic);
  //     const data = await fetchImages(topic, page);
  //     console.log(data);
  //     setImages(data.results);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && (
        <b className={css.error}>Sorry, there was an error, please reload...</b>
      )}
      {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
      <LoadMoreBtn
        images={images}
        isLoading={isLoading}
        handleClick={() => setPage(page + 1)}
      />
      <ImageModal modalIsOpen={isModal}
        afterOpenModal={ }
        closeModal={ } />
    </>
  );
}
