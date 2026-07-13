import HomePage from "./header/page";
import MenuBar from "./menuBar/page";
import OrderPage from "./Order/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <MenuBar /> 
      <OrderPage /> 
    </div>
  );
}
