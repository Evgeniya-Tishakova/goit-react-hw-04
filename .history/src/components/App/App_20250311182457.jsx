import { useEffect } from "react";
import { fetchImages } from "../../imageApi.js";

export default function App() {
  useEffect(() => {
    async function getImage() {
      const data = await fetchImages();
    }

    getImage();
  }, []);

  return <></>;
}
