import css from "./ImageModal.module.css";
import Modal from "react-modal";

export default function ImageModal({
  modalIsOpen,
  afterOpenModal,
  closeModal,
}) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
}
