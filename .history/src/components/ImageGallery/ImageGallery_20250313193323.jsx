import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, handleImageClick }) {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => (
          <li className={css.item} key={image.id}>
            <ImageCard
              onClick={handleImageClick}
              id={image.id}
              urls={image.urls}
              description={image.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
