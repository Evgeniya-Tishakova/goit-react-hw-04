import { useEffect } from "react";
import { fetchImages } from "../../imageApi.js";
import css from "./App.module.css";

export default function App() {
const [clicks, setClicks]= useState(0)


  useEffect(() => {
    async function getImage() {
      try {
        const data = await fetchImages();
        console.log(data);
      } catch (error) {
        console.log(error);
        } finally () {
          
      }
    }

    getImage();
  }, []);

    const handleSubmit = () => {
        
    }
    
    
    
    
    return <>
        <SearchBar onSubmit={ } />
    </>;
}
