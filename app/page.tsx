
import About from "./about/page";
import HomePage from "./header/page";
import MenuBar from "./menuBar/page";
import OrderPage from "./order/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <MenuBar />
      <OrderPage />
      <About />
    </div>
  );
}
