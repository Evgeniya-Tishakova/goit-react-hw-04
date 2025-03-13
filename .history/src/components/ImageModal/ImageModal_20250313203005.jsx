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
        overlayClassName={css.modalOverlay}
      >
        <button onClick={closeModal}>Close</button>
        {image && (
          <img
            className={css.modal}
            src={image.urls.full}
            alt="Modal Content"
          />
        )}
      </Modal>
    </>
  );
}
