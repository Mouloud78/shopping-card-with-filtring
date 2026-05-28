import "./App.css";

import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Nav />
        <Recommended />
        <Products />
      </main>
    </div>
  );
}

export default App;
