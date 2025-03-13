import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ page, onClick }) {
  return (
    <>
      {images.length > 0 && (
        <button className={css.button} onClick={onClick}>
          "Load more"
        </button>
      )}
    </>
  );
}
