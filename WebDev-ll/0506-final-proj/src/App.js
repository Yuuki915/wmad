import "./App.css";
// import InputCards from "./component/InputCards";
import { Header, Filter, Lists } from "./templates";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Lists />

      {/* <InputCards /> */}
    </div>
  );
}

export default App;
