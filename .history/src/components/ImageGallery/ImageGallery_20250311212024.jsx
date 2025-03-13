import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <div>
      {images.map((img) => (
        <img src={123} />
      ))}
    </div>
  );
}
