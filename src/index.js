import React from "react";
import ReactDOM from "react-dom/client";
import { cofigureStore } from "./store/index";
import { Root } from "./Root";
import './vendor/normalize.scss';
import './vendor/fonts.scss';
import './index.scss';

const store = cofigureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Root store={store} />
);
