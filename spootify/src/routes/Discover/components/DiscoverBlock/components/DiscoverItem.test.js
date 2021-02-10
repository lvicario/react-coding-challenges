import React from 'react';
import { render, screen } from "@testing-library/react";

import DiscoverItem from "./DiscoverItem";

test("should render DiscoverItem component and its contents", () => {
  const images = [{url: "/images/test.png"}]
  const testName = "Test name";
  const { container } = render(<DiscoverItem images={images} name={testName} />);
  const nameElem = screen.getByText(testName);

  expect(container).not.toBeNull();
  expect(nameElem).not.toBeNull();
  expect(nameElem.textContent).toBe(testName);
});
