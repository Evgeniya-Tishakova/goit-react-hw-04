import css from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => (
          <li key={image.}>
            <ImageCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
