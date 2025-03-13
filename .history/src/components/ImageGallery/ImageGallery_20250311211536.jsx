import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return <div>{JSON.stringify(images, null, 2)}</div>;
}
