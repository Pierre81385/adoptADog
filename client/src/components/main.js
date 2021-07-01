import React, { useState } from "react";
import NavTabs from "./navTabs";
import Home from "./pages/home";
import About from "./pages/about";
import View from "./pages/view";
import Summary from "./pages/summary";
import Contact from "./pages/contact";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    }
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "view") {
      return <View />;
    }
    if (currentPage === "summary") {
      return <Summary />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
