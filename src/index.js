import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Root } from "./Root";
import './vendor/normalize.scss';
import './vendor/fonts.scss';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Root store={store} />
);
