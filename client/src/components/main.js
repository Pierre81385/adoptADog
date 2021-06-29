import React, { useState } from "react";
import NavTabs from "./navTabs";
import Home from "./pages/view";

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
      return <Portfolio />;
    }
    if (currentPage === "summary") {
      return <Resume />;
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
