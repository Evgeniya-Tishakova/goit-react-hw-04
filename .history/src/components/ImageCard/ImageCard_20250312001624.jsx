import css from "./ImageCard.module.css";

export default function ImageCard({ id, urls, description }) {
  return (
    <div>
      <img src={urls.small} alt={description} />
    </div>
  );
}
