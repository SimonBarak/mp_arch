import React, { useRef, useEffect } from "react";

const Modal = (props) => {
  const { isOpen, setIsOpen } = props;
  //const [slide, setSlide] = useState(0);
  //const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  //   const openModal = (index) => {
  //     setIsOpen(true);
  //     setSlide(index);
  //   };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <div className="modal-container">
            {props.children}
            <div className="absolute right-0">
              <button
                id="main-nav__button"
                className={`nav-hamburger bg-white ${
                  isOpen ? "open" : "closed"
                }`}
                onClick={closeModal}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
