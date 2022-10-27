import Nav from "./Nav";
import { render, screen } from "@testing-library/react";

it("renders searchbar", () => {
  render(<Nav />);
  const img = screen.getByAltText("logo");
  expect(img.src).toContain("brewdog.png");
});

it("search is in the searchbar", () => {
  render(<Nav />);
  const search = screen.getByPlaceholderText(/Search/i);

  expect(search).toBeInTheDocument();
});

it("search if classic is in the nav", () => {
  render(
    <div className="checkbox__Classic">
      <label htmlFor="classic" className="checkbox__Classic--label">
        Classic
      </label>
      <input
        className="checkbox__Classic--check"
        type="checkbox"
        id="classic"
        value="setYear"
      />
    </div>
  );
  const classic = screen.getByLabelText("Classic");
  expect(classic).toBeInTheDocument();
});
