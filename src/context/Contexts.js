// ThemeContext.js
import React from "react";
import utils from "../utils/utils";

const ThemeContext = React.createContext(
  utils.getLocalStorage("theme") || "light"
);

const TodosContext = React.createContext(null);

const Calculator = React.createContext(null);

const Context = {
  ThemeContext,
  TodosContext,
  Calculator,
};
export default Context;
