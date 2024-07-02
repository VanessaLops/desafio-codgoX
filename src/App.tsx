import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import DetailsProducts from "./components/product/ProductDetail";
import Header from "./components/common/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes/material";
import Footer from "./components/common/Footer";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<DetailsProducts />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
