import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DiologuesContainer from "./components/Diologues/DiologuesContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route
          path="/messages"
          render={() => <DiologuesContainer />}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
