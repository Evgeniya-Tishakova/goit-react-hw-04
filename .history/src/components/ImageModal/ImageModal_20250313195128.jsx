import css from "./ImageModal.module.css";
import Modal from "react-modal";

const appElement = document.getElementById("example");

Modal.setAppElement("#example");

export default function ImageModal({ image, modalIsOpen, closeModal }) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        {image && <img src={image.full} />}
      </Modal>
    </>
  );
}

ReactDOM.render(<App />, appElement);
