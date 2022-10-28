import Beeritem from "./Beeritem";
import { render, screen } from "@testing-library/react";

it("renders beer", () => {
  render(<Beeritem name={"buzz"} img={"image"} />);
  const beername = screen.getByText("buzz");
  const beerimg = screen.getByRole("img");
  expect(beername).toBeInTheDocument();
  expect(beerimg).toBeInTheDocument();
});
