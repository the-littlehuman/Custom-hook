import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>
        I think you're lost, <Link to="/"> You should go home</Link>
      </p>
    </div>
  );
}
