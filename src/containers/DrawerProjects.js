import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProjectsActionCreators from "../store/actions/projects";
import DrawerProjects from "../components/Drawer/DrawerProjects/DrawerProjects";
import { getSortedProjects } from "../selectors/projectSelectors";

function mapStateToProps(state) {
  return {
    projects: getSortedProjects(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProjectsActionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerProjects);
