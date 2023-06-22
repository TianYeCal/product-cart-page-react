import styled from "styled-components";
import { minus, plus, previous, next } from "./images";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LogoCart } from "./images/icon-cart.svg";
import {
  increase,
  decrease,
  showCartBtn,
  showLightBoxBtn,
  lastMainPic,
  nextMainPic,
  toggleCart,
  changeMainPic,
} from "./features/cart/cartSlice";

const Product = () => {
  const { amount, showCart, productImg, productImgSmall, index } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="gallery">
        <button
          className="main-pic"
          onClick={() => dispatch(showLightBoxBtn())}
        >
          <img
            src={productImg[index]}
            alt="main pic"
            className="img main-img"
          />
        </button>
        <button
          className="left-icon icon"
          onClick={() => dispatch(lastMainPic())}
        >
          <img src={previous} alt="left arrow" />
        </button>

        <button
          className="right-icon icon"
          onClick={() => dispatch(nextMainPic())}
        >
          <img src={next} alt="right arrow" />
        </button>

        <div className="small-pics">
          {productImgSmall.map((small, indexArray) => {
            return (
              <button
                className="choose-pic"
                key={indexArray}
                onClick={() => dispatch(changeMainPic(indexArray))}
              >
                <img
                  src={small}
                  alt="product Small"
                  className={indexArray === index ? "active img" : "img"}
                />
              </button>
            );
          })}
        </div>
        {/* <div className="choose-pics">
          <div className="choose-pic active-img">
            <img src={product1Small} alt="product1Small" className="img " />
          </div>
          <div className="choose-pic">
            <img src={product2Small} alt="product2Small" className="img" />
          </div>
          <div className="choose-pic">
            <img src={product3Small} alt="product3Small" className="img" />
          </div>
          <div className="choose-pic">
            <img src={product4Small} alt="product4Small" className="img" />
          </div>
        </div> */}
      </div>
      <div className="purchase">
        <p className="name">Sneaker company</p>
        <p className="title">Fall limited Edition Sneakers</p>
        <p className="desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <p className="final-price">
            $125.00
            <span className="discount">50%</span>
          </p>
          <p className="original-price">$250.00</p>
        </div>
        <div className="buttons">
          <div className="quantity">
            <button
              disabled={showCart}
              onClick={() => {
                dispatch(decrease());
              }}
            >
              <img src={minus} alt="minus" className="minus" />
            </button>
            <p className="num">{amount}</p>
            <button disabled={showCart} onClick={() => dispatch(increase())}>
              <img src={plus} alt="plus" className="plus" />
            </button>
          </div>
          <button
            className="cart-btn"
            onClick={() => {
              dispatch(showCartBtn());
              if (amount !== 0) dispatch(toggleCart());
            }}
          >
            <LogoCart className="add-to-cart" />
            {/* <img src={Cart} alt="cart" /> */}
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  max-width: 75vw;
  .gallery {
    width: 100%;
  }
  .add-to-cart {
    stroke: white;
  }
  .main-pic,
  .choose-pic {
    border-radius: 0.5rem;
    overflow: hidden;
    border: none;
  }
  .choose-pics {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  .choose-pic:hover {
    opacity: 0.5;
  }
  .active {
    border: 2px red solid;

    opacity: 0.5;
  }
  .purchase {
    padding-top: 6rem;

    .name {
      text-transform: uppercase;
      color: hsl(26, 100%, 55%);
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .title {
      font-weight: 700;
      font-size: 1.8rem;
      text-align: left;
      text-transform: capitalize;
      margin-bottom: 2rem;
    }
    .desc {
      color: hsl(219, 9%, 45%);
      line-height: 1.4rem;
      margin-bottom: 2rem;
    }
    .final-price {
      font-weight: 700;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      .discount {
        font-size: 0.8rem;
        margin-left: 1rem;
        padding: 0.5rem;
        color: hsl(26, 100%, 55%);
        background: hsl(
          25.71428571428569,
          77.77777777777784%,
          94.70588235294117%
        );
        border-radius: 0.2rem;
      }
    }
    .original-price {
      color: hsl(219, 9%, 45%);
      text-decoration: line-through;
      margin-bottom: 3rem;
    }
    .buttons {
      display: flex;
      gap: 1rem;
    }

    .quantity {
      padding: 1rem 0.5rem;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      background: rgb(229, 232, 237);
      width: 10rem;
      align-items: center;
      border-radius: 0.5rem;
      vertical-align: middle;
      button {
        border: none;
      }
      .num {
        font-weight: 700;
      }
      .minus {
        margin-bottom: 0.2rem;
      }
    }
  }
  .small-pics {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  .left-icon,
  .right-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 1rem;
    background: white;
    border: none;
    border-radius: 50%;
    display: none;
  }
  .price {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
  }
  .minus,
  .plus {
    border: none;
    background: transparent;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    gap: 2rem;
    .main-pic {
      border-radius: 0;
      border: none;
      max-width: 100%;
      height: 25rem;
    }
    .main-img {
    }
    .small-pics {
      display: none;
    }
    .purchase {
      padding: 0 2rem;
      width: 100%;
      .quantity {
        width: 100%;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .cart-btn {
      width: 100%;
    }
    .price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* align-items: center; */
    }
    .cart-btn {
      margin-bottom: 2rem;
    }
    .gallery {
      position: relative;
      .left-icon,
      .right-icon {
        display: block;
      }
      .left-icon {
        left: 1rem;
      }
      .right-icon {
        right: 1rem;
      }
      .left-icon:hover,
      .right-icon:hover {
        color: hsl(26, 100%, 55%);
      }
    }
  }
`;
export default Product;
