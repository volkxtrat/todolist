import { authLogout } from "../store/actions/user";
import { connect } from "react-redux";
import Drawer from "../components/Drawer/Drawer";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(authLogout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
