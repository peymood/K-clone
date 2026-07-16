
import About from "./about/page";
import Footer from "./footer/page";
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
      <Footer />
    </div>
  );
}
