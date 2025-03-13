import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <ClipLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
