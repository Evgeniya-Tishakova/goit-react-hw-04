import css from "./ImageGallery.module.css";
import ImageCard from "./";

export default function ImageGallery({ images }) {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => (
          <li>
            <ImageCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
