import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Segment1 from "../../assets/segments/Segment1.svg";
import Segment2 from "../../assets/segments/Segment2.png";
import Segment3 from "../../assets/segments/Segment3.png";
import Segment4 from "../../assets/segments/Segment4.png";
import Segment5 from "../../assets/segments/Segment5.png";
import Segment6 from "../../assets/segments/Segment6.png";
import Segment7 from "../../assets/segments/Segment7.png";
import Segment8 from "../../assets/segments/Segment8.png";
import Segment9 from "../../assets/segments/Segment9.png";
import Segment10 from "../../assets/segments/Segment10.png";
import Segment11 from "../../assets/segments/Segment11.png";
import Segment12 from "../../assets/segments/Segment12.png";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { icon: Segment1, path: "/", text: "Impact" },
    { icon: Segment2, path: "/data", text: "Data" },
    { icon: Segment3, path: "/reporting", text: "Reporting" },
    { icon: Segment4, path: "/learn", text: "Learn" },
    { icon: Segment5, path: "/governance", text: "Governance" },
    { icon: Segment6, path: "/docs", text: "Docs" },
    { icon: Segment7, path: "/intelligence", text: "Intelligence" },
    { icon: Segment8, path: "/surveys", text: "Surveys" },
    { icon: Segment9, path: "/flows", text: "Flows" },
    { icon: Segment10, path: "/tasks", text: "Tasks" },
    { icon: Segment11, path: "/configuration", text: "Configuration" },
    { icon: Segment12, path: "/support", text: "Support" },
  ];

  return (
    <Drawer variant="permanent" anchor="left" sx={{ marginLeft: "30px" }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
            sx={{
              // marginTop: "10px",
              overflow: "hidden",
              color:
                currentPath === item.path ? "#1976d2" : "rgba(0, 0, 0, 0.87)",
              backgroundColor:
                currentPath === item.path
                  ? "rgba(25, 118, 210, 0.1)"
                  : "inherit",
              borderLeft:
                currentPath === item.path
                  ? "4px solid #1976d2"
                  : "4px solid transparent",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.04)",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: currentPath === item.path ? "#1976d2" : "inherit" }}
            >
              <img src={item.icon} alt={item.text} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
