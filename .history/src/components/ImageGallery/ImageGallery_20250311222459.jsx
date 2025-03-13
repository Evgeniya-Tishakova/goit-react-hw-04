import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => (
          <img src={img.urls.thumb} />
        ))}
      </ul>
    </div>
  );
}
