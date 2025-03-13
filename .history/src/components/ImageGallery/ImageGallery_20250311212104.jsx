import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <div>
      {images.map((img) => (
        <img src={img.urls.thumb} />
      ))}
    </div>
  );
}
