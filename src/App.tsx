import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router";
import { Box } from "@mui/material";
import Home from "./pages/Impact/Impact";
import DataPage from "./pages/DataPage";
import Reporting from "./pages/Reporting/Reporting";
import Learn from "./pages/Learn/Learn";
import Governance from "./pages/Governance/Governance";
import Docs from "./pages/Docs/Docs";
import Intelligence from "./pages/Intelligence/Intelligence";
import Surveys from "./pages/Surveys/Surveys";
import Flows from "./pages/Flows/Flows";
import Tasks from "./pages/Tasks/Tasks";
import Configuration from "./pages/Configuration/Configuration";
import Support from "./pages/Support/Support";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "200px" }}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/data"} element={<DataPage />} />
          <Route path={"/reporting"} element={<Reporting />} />
          <Route path={"/learn"} element={<Learn />} />
          <Route path={"/governance"} element={<Governance />} />
          <Route path={"/docs"} element={<Docs />} />
          <Route path={"/intelligence"} element={<Intelligence />} />
          <Route path={"/surveys"} element={<Surveys />} />
          <Route path={"/flows"} element={<Flows />} />
          <Route path={"/tasks"} element={<Tasks />} />
          <Route path={"/configuration"} element={<Configuration />} />
          <Route path={"/support"} element={<Support />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
