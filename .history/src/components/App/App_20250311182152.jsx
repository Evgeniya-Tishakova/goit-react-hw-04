import { useEffect } from "react";
import { imageApi } from "../../imageApi.js";

export default function App() {
  useEffect(() => {
    async function getImage() {
      const data = await imageApi();
    }

    getImage();
  }, []);

  return <></>;
}
