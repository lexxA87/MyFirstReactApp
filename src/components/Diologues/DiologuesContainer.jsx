import { connect } from "react-redux";
import {
  addMessageActionCreator,
} from "../../redux/diologs-reducer";
import Diologues from "./Diologues";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    diologsPage: state.diologsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Diologues);
