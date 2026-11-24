import React from "react";
import { createRoot } from "react-dom/client";
import RoyalCity from "./RoyalCity.jsx";
import "./planner.css";
import "./app.css";
import { translations } from "./translations.js";

const STORAGE_KEY = "royal-city-planner-state";
let saved = {};
try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch {}
const options = {
  zone_width: 12, zone_height: 10, cut_width: 2, cut_height: 1,
  tower_size: 3, castle_size: 3, royal_size: 3, outside_margin: 12,
  saved, canSave: true, readOnly: false, live: false, t: translations
};
createRoot(document.getElementById("root")).render(
  <React.StrictMode><RoyalCity options={options} /></React.StrictMode>
);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(console.warn));
}
