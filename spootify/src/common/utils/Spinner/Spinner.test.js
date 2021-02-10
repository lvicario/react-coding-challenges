import React from "react";
import { render, screen } from "@testing-library/react";

import Spinner from "./Spinner";

test("should render Spinner component and its child div elements", () => {
  const { container } = render(<Spinner />);
  const spinnerElem = container.querySelector(".lds-roller");

  expect(spinnerElem).not.toBeNull();
  expect(spinnerElem.getElementsByTagName("div").length).toBe(8);
});
