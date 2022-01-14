import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Industry from "./Components/Solutions/Industry/Industry";
import Construction from "./Components/Solutions/Construction/Construction";
import Financial from "./Components/Solutions/Financial/Financial";
import Healthcare from "./Components/Solutions/Healthcare/Healthcare";
import Hospitality from "./Components/Solutions/Hospitality/Hospitality";
import Nonprofits from "./Components/Solutions/Nonprofits/Nonprofits";
import Professional from "./Components/Solutions/Professional/Professional";
import Subscription from "./Components/Solutions/Subscription/Subscription";
import Wholesale from "./Components/Solutions/Wholesale/Wholesale";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Industry />} />
            <Route path="industry" element={<Industry />} />
            <Route path="construction" element={<Construction />} />
            <Route path="financial" element={<Financial />} />
            <Route path="healthcare" element={<Healthcare />} />
            <Route path="hospitality" element={<Hospitality />} />
            <Route path="nonprofits" element={<Nonprofits />} />
            <Route path="professional" element={<Professional />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="wholesale" element={<Wholesale />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
