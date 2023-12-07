import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import Demo from "./demo";
import { Box, Paper, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Home, Order, Prices, Shop } from "./pages";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
      darker: "#eeeeee",
    },
    gray: {
      main: "#e0e0e0",
      darker: "#d7d7d7",
    },
  },
});

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
        <Box
          sx={{
            padding: "0 1rem",
            marginLeft: expanded ? "21rem" : "6rem",
            transition: "margin 0.2s ease-in-out",
          }}
        >
          <Navbar />
          <Paper component="main" sx={{ boxShadow: 4, p: 3 }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </Paper>
        </Box>
        {/* <Demo /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
