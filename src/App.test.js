import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO: add tests as needed
//
it("renders search box", () => {
  render(<App />);
  const search = screen.getByLabelText(/Search/i);
  expect(search).toBeInTheDocument();
});
