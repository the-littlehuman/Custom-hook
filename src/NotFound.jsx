import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>
        This page doesn't exist, <Link to="/">go home</Link>
      </p>
    </div>
  );
}
