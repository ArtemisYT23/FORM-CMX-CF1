import { BrowserRouter, Routes, Route } from "react-router-dom";
import Requirement from "./views/Requirement";
import Cotizaciones from "./views/Cotizaciones";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Requirement />} />
        <Route path="/Success" element={<Cotizaciones />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
