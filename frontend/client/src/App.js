import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navabar";
import ClientsPanel from "./pages/ClientsPanel";
import Clients from "./pages/Clients";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route  path="/" Component={ClientsPanel}></Route>
          <Route exact path="/Client/:id" Component={Clients}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
