import styled from "styled-components";
import {
  logo,
  Cart,
  avatar,
  product1Small,
  deleteIcon,
  menu,
} from "./images/index";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  toggleCart,
  openModal,
} from "./features/cart/cartSlice";
const Nav = () => {
  const { showCart, amount, showCartItem } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-section">
        <div className="nav-left">
          <img
            src={menu}
            alt="menu"
            className="menu"
            onClick={() => dispatch(openModal())}
          />
          <img src={logo} alt="logo" />
          <div className="nav-links">
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
        <div className="nav-right">
          <button className="cart" onClick={() => dispatch(toggleCart())}>
            <img src={Cart} alt="shopping cart" />
            {amount ? <span className="cart-number">{amount} </span> : ""}
          </button>
          <div className="avatar-container">
            <img src={avatar} alt="nav-avatar" className="img avatar-img" />
          </div>
        </div>
      </div>
      {showCart && (
        <section className="cart-modal">
          <h4 className="title-modal">Cart</h4>
          <div className="underline"></div>
          <div className="cart-content">
            {showCartItem ? (
              <>
                {" "}
                <div className="checkout-item">
                  <div className="checkout-img">
                    <img
                      src={product1Small}
                      alt="checkout img"
                      className="check-img"
                    />
                  </div>
                  <div className="checkout-desc">
                    <p className="checkout-title">
                      Fall Limited Edition Sneakers
                    </p>
                    <p className="checkout-detail">
                      $125 × {amount} &nbsp;
                      <span className="total-price">${125 * amount}.00</span>
                    </p>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(deleteCartItem())}
                  >
                    <img src={deleteIcon} alt="deleteIcon" />
                  </button>
                </div>
                <button className="cart-btn checkout-btn">Checkout</button>{" "}
              </>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </section>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  max-width: 80%;
  /* padding: 2rem 0; */
  margin: 0 auto;
  margin-bottom: 3rem;
  border-bottom: 1px solid hsl(220, 14%, 75%);

  .nav-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-left {
    display: flex;
    gap: 2rem;
    align-items: center;
    /* padding: 2rem 0; */
  }
  .link {
    margin-right: 1rem;
    color: hsl(219, 9%, 45%);
    padding: 2rem 0;
  }
  .link:hover {
    color: black;
    border-bottom: 2px solid hsl(26, 100%, 55%);
  }
  .nav-right {
    display: flex;
    gap: 2rem;
    align-items: center;
    position: relative;
  }
  .avatar-img {
    height: 3rem;
    border-radius: 50%;
  }
  .avatar-img:hover {
    cursor: pointer;
    border: 1px red solid;
  }
  .cart {
    border: none;
    cursor: pointer;
    background: transparent;
  }
  .cart-number {
    font-size: 10px;
    color: #fff;
    background: red;
    border-radius: 50%;
    padding: 0 5px;
    position: relative;
    left: -8px;
    top: -15px;
    opacity: 0.9;
  }
  .cart-modal {
    position: absolute;
    right: 5rem;
    top: 5rem;
    z-index: 5;
    width: 20rem;
    background: white;
    box-shadow: var(--shadow-3);
    padding: 1rem;
    .title-modal {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .underline {
      height: 2px;
      width: 100%;
      background: hsl(220, 14%, 75%);
    }
    .cart-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 10rem;
      gap: 1rem;
    }
    .checkout-item {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      align-items: center;
      font-size: 14px;
      color: hsl(219, 9%, 45%);
      .checkout-title {
        margin-bottom: 0.5rem;
      }
      .check-img {
        height: 3rem;
        border-radius: 0.25rem;
      }
      .checkout-btn {
        width: 100%;
      }
      .delete-btn {
        border: none;
        background: none;
      }
      .total-price {
        font-weight: 700;
        color: black;
      }
    }
  }
  .menu {
    display: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 2rem;
    .nav-section {
      margin-bottom: 2rem;
    }
    .cart-modal {
      .underline {
        display: none;
      }
    }
    .menu {
      display: block;
    }
    .nav-links {
      display: none;
    }
    .avatar-img {
      height: 2rem;
    }
    .cart-modal {
      left: 3rem;
    }
  }
`;
export default Nav;
