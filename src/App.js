import "./App.css";
import AboutMe from "./component/AboutMe/AboutMe";
import { Home } from "./component/Home/Home";
import { Resume } from "./component/Resume/Resume";
import Sidebar from "./component/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: "15rem" }}>
        <Home />
        <AboutMe />
        <Resume />
      </div>
    </div>
  );
}

export default App;
