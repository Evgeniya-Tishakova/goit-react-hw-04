import { useEffect } from "react";
import { fetchImages } from "../../imageApi.js";

export default function App() {
  useEffect(() => {
    async function getImage() {
      try {
        const data = await fetchImages();
      } catch (error) {}
    }

    getImage();
  }, []);

  return <></>;
}
