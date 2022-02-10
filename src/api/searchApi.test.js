import { search } from "./searchApi";

// TODO: implement failing tests
//
// - for a number of tests below, replace the expectation with one that exercises the api as noted in the description.
//
// TODO: add missing tests
//
// - add tests to as needed
//
//
//
describe("search", () => {
  
  it("should match code with exact string", () => {
    expect(search("GM")).toEqual([{ name: "Gambia", code: "GM" }]);
  });

  it("should match name with exact string", () => {
    expect(true).toEqual(false); // TODO delete this line and replace with a test that matches the description
  });
  
  it("should match name with Regex", () => {
    expect(search(/Gambia/)).toEqual([{ name: "Gambia", code: "GM" }]);
  });
  
  it("should match name with partial string", () => {
    expect(true).toEqual(false); // TODO delete this line and replace with a test that matches the description
  });
  
  it("should match name with regex", () => {
    expect(true).toEqual(false); // TODO delete this line and replace with a test that matches the description
  });
  
});
