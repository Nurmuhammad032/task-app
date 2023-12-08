import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Box, Paper, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import {
  Home,
  NotFound,
  Order,
  OrderCreate,
  OrderEdit,
  OrderView,
  Prices,
  Shop,
} from "./pages";

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
          <Paper
            component="main"
            sx={{ boxShadow: 4, p: 3, overflow: "auto", minHeight: "90vh" }}
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/order/create" element={<OrderCreate />} />
              <Route path="/order/:id" element={<OrderView />} />
              <Route path="/order/edit" element={<OrderEdit />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Paper>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
