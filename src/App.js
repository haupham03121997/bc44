import logo from "./logo.svg";
import "./App.css";
import DemoClass from "./DemoComponent/DemoClass";
import DemoFunction from "./DemoComponent/DemoFunction";
import DemoHeader from "./DemoComponent/DemoHeader";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import DataBinding from "./DataBinding/DataBinding";
import EventHandling from "./EventHandling/EventHandling";
import DemoState from "./DemoState/DemoState";
import Ex_State_Car from "./Ex_State_Car/Ex_State_Car";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./DemoProps/DemoProps";
// import Ex_ShoeShop from "./Ex_ShoeShop/Ex_ShoeShop";
import Ex_Movie from "./Ex_Movie/Ex_Movie";
import Demo_MiniRedux from "./Demo_MiniRedux/Demo_MiniRedux";
import Ex_ShoeShop_Redux from "./Ex_ShoeShop_Redux/Ex_ShoeShop_Redux";
import DemoLifeCycle from "./DemoLifeCycle/DemoLifeCycle";
import ManagementProduct from "./ReactForm/ManagementProduct";

function App() {
  return (
    <section className="">
      {/* <DemoClass /> */}
      {/* <DemoFunction></DemoFunction> */}
      {/* <DemoHeader /> */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding /> */}
      {/* <EventHandling /> */}
      {/* <DemoState /> */}
      {/* <Ex_State_Car /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <Ex_ShoeShop /> */}
      {/* <Ex_Movie /> */}
      {/* redux */}
      {/* <Demo_MiniRedux /> */}
      {/* <Ex_ShoeShop_Redux /> */}
      {/* <DemoLifeCycle /> */}
      <ManagementProduct />
    </section>
  );
}
console.log(App());

export default App;
