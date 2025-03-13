import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <ClipLoader
      className={css.loader}
      color="#123abc"
      loading={true}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
