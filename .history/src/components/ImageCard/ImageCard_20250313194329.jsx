import css from "./ImageCard.module.css";

export default function ImageCard({
  id,
  urls,
  description,
  handleImageClick,
  image,
}) {
  return (
    <div>
      <img
        onClick={() => handleImageClick({ image })}
        className={css.image}
        src={urls.small}
        alt={description}
      />
    </div>
  );
}
