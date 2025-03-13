import css from "./ImageModal.module.css";
import Modal from "react-modal";

export default function ImageModal({ image, modalIsOpen, closeModal }) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <img src={image.big} />
      </Modal>
    </>
  );
}
