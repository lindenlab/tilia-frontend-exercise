//import { search } from "./api/searchApi";

//
// TODO: implement search
//
// Use the search function exported from the searchApi to take input
// and display search results.
//
// TODO:  implement orientation
//
// change the layout of the search component based on the orientation prop
//
// - if HORIZONTAL: the label, input and results should flow left to right...
//      label input results
//
// - if VERTICAL: the label, input and results should flow top to bottom...
//      label
//      input
//      results
//
export const Search = ({ orientation = ORIENTATION.VERTICAL }) => {
  return (
    <div className="search">
      <label id="searchLabel">Country Search</label>
      <input aria-labelledby="searchLabel" name="searchInput" type="text" />
      <ResultList resultData={[]} />
    </div>
  );
};
export const ORIENTATION = {
  VERTICAL: "VERT",
  HORIZONTAL: "HORZ",
};

// TODO: use CSS to change the layout of the result
//
// - the name should display aligned to the far left
// - the code should display aligned to the far right
//  -----------------------------------------------
//  | Short Name                               SN |
//  | Looooooooooooooonger Name                LN |
//  -----------------------------------------------
//
const Result = ({ data }) => {
  return (
    <div className="result">
      <span className="resultName">{data.name}</span>
      <span className="resultCode">{data.code}</span>
    </div>
  );
};

// TODO: implement the ResultList using the Result component above
//
const ResultList = ({ resultData = [] }) => {
  return <div className="results">{/* render the result data here */}</div>;
};
