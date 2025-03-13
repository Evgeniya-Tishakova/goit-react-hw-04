import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <div>
      <ul></ul>
      {images.map((img) => (
        <img src={img.urls.thumb} />
      ))}
    </div>
  );
}
