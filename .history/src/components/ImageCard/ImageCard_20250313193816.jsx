import css from "./ImageCard.module.css";

export default function ImageCard({ id, urls, description, handleImageClick }) {
  return (
    <div>
      <img
        onClick={() => handleImageClick({ url })}
        className={css.image}
        src={urls.small}
        alt={description}
      />
    </div>
  );
}
