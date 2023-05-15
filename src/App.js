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

function App() {
  return (
    <div className="container">
      {/* <DemoClass /> */}
      {/* <DemoFunction></DemoFunction> */}
      {/* <DemoHeader /> */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding /> */}
      {/* <EventHandling /> */}
      {/* <DemoState /> */}
      <Ex_State_Car />
    </div>
  );
}

export default App;
