import { render, screen } from "@testing-library/react";
import App from "./App";

it("check if beer is on the page", () => {
  render(<App />);
  const text = screen.queryByText(/Changing the world, one glass at a time./i);
  expect(text).toBeInTheDocument();
  expect(text).toBeTruthy();
});
