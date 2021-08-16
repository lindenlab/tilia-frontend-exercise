import { search } from "./searchApi";

describe("search", () => {
	it("should match code with exact string", () => {
		expect(search("GM")).toEqual([{ name: "Gambia", code: "GM" }]);
	});
	it("should match name with exact string", () => {
		expect(search("Gambia")).toEqual([{ name: "Gambia", code: "GM" }]);
	});
	it("should match name with partial string", () => {
		expect(search("Gamb")).toEqual([{ name: "Gambia", code: "GM" }]);
	});
	it("should match name with regex", () => {
		expect(search("/Gambia/")).toEqual([{ name: "Gambia", code: "GM" }]);
	});
});
