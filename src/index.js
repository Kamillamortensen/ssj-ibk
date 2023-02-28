import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MembershipsAndPrices from "./pages/MembershipsAndPrices";
import TeamsAndHours from "./pages/TeamsAndHours";
import NoPage from "./pages/NoPage";
import './index.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="memberships" element={<MembershipsAndPrices />} />
          <Route path="teams" element={<TeamsAndHours />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);