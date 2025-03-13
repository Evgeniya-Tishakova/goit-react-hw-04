import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#yourAppElement");

export default function ImageModal({ image, modalIsOpen, closeModal }) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        {image && <img className={css.modal} src={image.urls.full} />}
      </Modal>
    </>
  );
}
