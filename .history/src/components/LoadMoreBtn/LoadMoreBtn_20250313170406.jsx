import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn() {
  return (
    <>
      {images.length > 0 && <button className={css.button}>"Load more"</button>}
    </>
  );
}
