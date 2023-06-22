import styled from "styled-components";
import { next, previous } from "./images";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CloseBtn } from "./images/icon-close.svg";
import {
  closeLightBoxBtn,
  nextMainPic,
  lastMainPic,
} from "./features/cart/cartSlice";
const LightBox = () => {
  const { productImg, productImgSmall, index, showLightBox } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="control-pic">
        <div className="main-pic">
          <button
            className="close-icon"
            onClick={() => dispatch(closeLightBoxBtn())}
          >
            <CloseBtn className="close-img" />
          </button>
          <button
            className="left-icon icon"
            onClick={() => dispatch(lastMainPic())}
          >
            <img src={previous} alt="left arrow" />
          </button>
          <img
            src={productImg[index]}
            alt="light box main pic"
            className="img main-img"
          />
          <button
            className="right-icon icon"
            onClick={() => dispatch(nextMainPic())}
          >
            <img src={next} alt="right arrow" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(39, 39, 39, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .control-pic {
    .main-pic {
      height: 30rem;
      width: 30rem;
      border-radius: 0.5rem;
      /* overflow: hidden; */
      position: relative;
      .left-icon {
        position: absolute;
        left: -1rem;
        top: 50%;
        z-index: 10;
        transform: translateY(-50%);
      }
      .right-icon {
        position: absolute;
        right: -1rem;
        top: 50%;
        z-index: 10;
        transform: translateY(-50%);
      }
      .close-icon {
        border: none;
        position: absolute;
        top: -2rem;
        right: 0;
        border: none;
        background: transparent;
      }
    }
    .close-img {
      color: white;
      width: 2rem;
    }

    .icon {
      padding: 0.5rem;
      background: white;
      border-radius: 50%;
      border: none;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export default LightBox;
