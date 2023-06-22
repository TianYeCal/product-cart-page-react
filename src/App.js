import { useSelector } from "react-redux";
import LightBox from "./LightBox";
import Nav from "./Nav";
import Product from "./Product";
import Modal from "./Modal";

function App() {
  const { showLightBox, showModal } = useSelector((store) => store.cart);
  return (
    <>
      {showLightBox && <LightBox />}
      {showModal && <Modal />}
      <Nav />
      <Product />
    </>
  );
}

export default App;
