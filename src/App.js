import "./styles.css";
import UseContextComponent from "./demo-components/ContextProviderComponent";
import ZustandComponent from "./demo-components/ZustandComponent";
import JotaiComponent from "./demo-components/JotaiComponent";
import ReduxComponent from "./demo-components/ReduxComponent";
import UseReducerComponent from "./demo-components/UseReducerComponent";

const initValues = {
  fish: 0,
  hamsters: 0,
};

export default function App() {
  return (
    <div className="App">
      <ZustandComponent />
      <hr />
      <JotaiComponent />
      <hr />
      <ReduxComponent />
      <hr />
      <UseReducerComponent initValues={initValues} />
      <hr />
      <UseContextComponent initValues={initValues} />
    </div>
  );
}
