import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";
import { GlobalStyles } from "./utils";

<div class="bg"></div>
// Global Cursor Component
const GlobalCursor = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    const cursor = document.querySelector(".cursor");

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    // Mouse move event listener to update cursor position
    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    // Click event listener to trigger click effect
    window.addEventListener("click", () => {
      cursor.classList.add("click-effect");
      setTimeout(() => cursor.classList.remove("click-effect"), 300); // Remove effect after 300ms
    });

    // Animate cursor circles on mouse movement
    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);

  
  return (
    <div className="cursor">
      <div class="bg"></div>
      {Array.from({ length: 20 }).map((_, index) => (
        <div className="circle" key={index}></div>
      ))}
    </div>
  );
};

// Render the App with Global Styles and Cursor
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
    <GlobalCursor />
  </React.StrictMode>
);
