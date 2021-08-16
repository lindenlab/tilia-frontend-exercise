import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { ResultList } from "./Result";

it("renders search box", () => {
	render(<App />);
	const search = screen.getByLabelText(/Search/i);
	expect(search).toBeInTheDocument();
});
describe("Search", () => {
	it("Search input starts empty", () => {
		render(<App />);
		const input = screen.getByTestId("search-input");
		expect(input.nodeValue).toBe(null);
	});

	it("Search input value gets updated", () => {
		render(<App />);
		const input = screen.getByTestId("search-input");
		fireEvent.change(input, { target: { value: "23" } });
		expect(input.value).toBe("23");
	});

	it("When input is empty, then 'no data' is shown", () => {
		render(<App />);
		const noData = screen.getByTestId("no-data");
		expect(noData).toBeTruthy();
	});
	it("When result array is empty, then 'no data' is shown", () => {
		render(<ResultList list={[]} />);
		expect(screen.getByTestId("no-data")).toBeTruthy();
	});
	it("When result array in not empty, then 'list-container' is shown", () => {
		render(<ResultList list={[{ name: "test", code: "test" }]} />);
		expect(screen.getByTestId("list-container")).toBeTruthy();
	});
});
