import css from "./ImageCard.module.css";

export default function ImageCard({ id }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
}
