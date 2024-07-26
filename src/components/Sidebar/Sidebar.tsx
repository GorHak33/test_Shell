import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { text: "Impact", icon: <HomeIcon />, path: "/" },
    { text: "Data", icon: <DataUsageIcon />, path: "/data" },
    { text: "Reporting", icon: <BarChartIcon />, path: "/reporting" },
    { text: "Learn", icon: <SchoolIcon />, path: "/learn" },
    { text: "Governance", icon: <DescriptionIcon />, path: "/governance" },
    { text: "Docs", icon: <DescriptionIcon />, path: "/docs" },
    {
      text: "Intelligence",
      icon: <QuestionAnswerIcon />,
      path: "/intelligence",
    },
    { text: "Surveys", icon: <TaskIcon />, path: "/surveys" },
    { text: "Flows", icon: <TaskIcon />, path: "/flows" },
    { text: "Tasks", icon: <TaskIcon />, path: "/tasks" },
    { text: "Configuration", icon: <SettingsIcon />, path: "/configuration" },
    { text: "Support", icon: <SupportIcon />, path: "/support" },
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
              marginTop: "20px",
              overflow: "hidden",
              color:
                currentPath === item.path ? "#1976d2" : "rgba(0, 0, 0, 0.87)",
              backgroundColor:
                currentPath === item.path
                  ? "rgba(25, 118, 210, 0.08)"
                  : "inherit",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.04)",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: currentPath === item.path ? "#1976d2" : "inherit" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
