import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<ErrorBoundary/>}/>
      </Routes>
    </BrowserRouter>
  );
}
