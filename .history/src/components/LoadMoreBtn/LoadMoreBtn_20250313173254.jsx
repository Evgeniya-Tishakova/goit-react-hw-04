import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ images, handleClick }) {
  return (
    <>
      {images.length > 0 && (
        <button className={css.button} onClick={handleClick}>
          "Load more"
        </button>
      )}
    </>
  );
}
