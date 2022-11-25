import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/sidebar/sidebar.component";
import {
  GamesPage,
  Movies,
  NotFound,
  HomePage,
  ContactPage,
  AboutPage,
} from "./pages";

export const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Info" element={<AboutPage />} />
        <Route path="/ContactUs" element={<ContactPage />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Games" element={<GamesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
