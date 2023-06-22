import styled from "styled-components";
import { Close } from "./images";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./features/cart/cartSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal-section">
        <button className="close-img" onClick={() => dispatch(closeModal())}>
          <img src={Close} alt="close icon" />
        </button>
        <div className="modal-links">
          <a href="/#" className="link">
            Collections
          </a>
          <a href="/#" className="link">
            Men
          </a>
          <a href="/#" className="link">
            Women
          </a>
          <a href="/#" className="link">
            About
          </a>
          <a href="/#" className="link">
            Contact
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(39, 39, 39, 0.9);
  .modal-section {
    width: 70%;
    background: white;
    height: 100vh;
    padding: 1rem;
  }
  .close-img {
    border: none;
    height: 3rem;
    width: 3rem;
    background: transparent;
    margin-bottom: 3rem;
  }
  .modal-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 1rem;
    .link {
      color: black;
      font-weight: 700;
    }
  }
`;
export default Modal;
