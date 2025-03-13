import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image, i) => (
          <li className={css.item} key={i}>
            <ImageCard
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
