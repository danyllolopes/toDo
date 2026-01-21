import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import LayoutMain from './pages/layout-main';
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
