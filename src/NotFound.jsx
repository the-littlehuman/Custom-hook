import React from "react";
import { Link } from "react-router-dom";
import Links from "./link";

export default function NotFound() {
  return (
    <>
    <Links></Links>
       <div className="not-found">
      <h1>404</h1>
      <p>
        You look lost, <Link to="/">go home</Link>
      </p>
    </div>
    </>
 
  );
}
