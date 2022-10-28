import Nav from "./Nav";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

it("renders searchbar", () => {
  render(<Nav />);
  const img = screen.getByAltText("logo");
  expect(img.src).toContain("brewdog.png");
});

it("renders searchbar", () => {
  render(<Nav />);
  const img = screen.getByAltText("magnify");
  expect(img.src).toContain("magnifier.png");
});

it("can enter values in the search bar", () => {
  render(<Nav />);
  const nameInput = screen.getByRole("textbox");
  userEvent.type(nameInput, "hoe le");
  expect(nameInput).toBeTruthy();
});

it("can click on clickbox", () => {
  render(<Nav />);
  const check = screen.getByLabelText("Classic");
  fireEvent.click(check, { target: { value: "setYear" } });
  expect(check).toBeTruthy();
});
