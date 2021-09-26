import React from "react";
import "./sass/style.scss";
import Navigation from "./components/layout/Navigation";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </BrowserRouter>
      <Footer/>

    </>
  );
}

export default App;
