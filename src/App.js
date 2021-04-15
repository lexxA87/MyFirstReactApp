import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import PreLoader from "./components/Common/PreLoader/PreLoader";
import DiologuesContainer from "./components/Diologues/DiologuesContainer";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.inilitialized) {
      return <PreLoader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <DiologuesContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inilitialized: state.app.inilitialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
