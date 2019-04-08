import React, { PureComponent } from "react";
import Inbox from "@material-ui/icons/Inbox";
import Today from "@material-ui/icons/Today";
import NextWeek from "@material-ui/icons/NextWeekOutlined";
import EventNote from "@material-ui/icons/EventNoteOutlined";

import routes from "../../../routes/routes";
import DrawerLink from "../DrawerLink/DrawerLink";

export const MainNavLink = [
  {
    title: "Inbox",
    path: routes.inbox,
    icon: Inbox
  },
  {
    title: "Today",
    path: routes.today,
    icon: Today
  },
  {
    title: "Next 7 days",
    path: routes.week,
    icon: NextWeek
  },
  {
    title: "All",
    path: routes.all,
    icon: EventNote
  }
];

class DrawerLinkList extends PureComponent {
  render() {
    return (
      <>
        {MainNavLink.map(link => (
          <DrawerLink
            key={link.path}
            primary={link.title}
            path={link.path}
            icon={link.icon}
          />
        ))}
      </>
    );
  }
}

export default DrawerLinkList;
