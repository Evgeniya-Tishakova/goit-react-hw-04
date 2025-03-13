import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(false);
    
    const function startLoading() {

    }

  return (
    <>
      <ClipLoader
        color="#123abc"
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
