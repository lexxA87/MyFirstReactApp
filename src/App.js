import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Diologues from "./components/Diologues/Diologues";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Diologues} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
