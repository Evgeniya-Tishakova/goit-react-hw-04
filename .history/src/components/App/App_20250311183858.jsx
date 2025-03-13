import { useEffect } from "react";
import { fetchImages } from "../../imageApi.js";
import css from "./App.module.css";

export default function App() {
  useEffect(() => {
    async function getImage() {
      try {
        const data = await fetchImages();
        console.log(cat);
      } catch (error) {
        console.log(error);
      }
    }

    getImage();
  }, []);

  return <></>;
}
