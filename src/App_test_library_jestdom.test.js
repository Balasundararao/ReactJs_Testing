import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

it("renders Welcom Message", () => {
  const { getByText } = render(<App />);
  expect(getByText("Hello CodeSandbox")).toBeInTheDocument();
});
