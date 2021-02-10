import React from "react";
import { render, screen } from "@testing-library/react";

import ErrorMessage from "./ErrorMessage";

test("should render error message component and its contents", () => {
  const message = "Test error message.";
  const { container } = render(<ErrorMessage msg={message} />);

  expect(container).not.toBeNull();
  expect(container.textContent).toBe(message);
});
