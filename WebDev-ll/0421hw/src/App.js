import DrinkDept from "./container/DrinkDept";
import SnackDept from "./container/SnackDept";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <SnackDept />
        <DrinkDept />
      </div>
    </div>
  );
}
export default App;
