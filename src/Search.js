import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { search } from "./api/searchApi";
import { DEBOUNCE_TIME } from "./constants";
import { ResultList } from "./Result";

const _T = (str) => str;
export const Search = ({ orientation = ORIENTATION.VERTICAL }) => {
	// @Variables
	const [searchText, setSearchText] = useState("");
	const [list, setList] = useState([]);
	const isVertical = orientation === ORIENTATION.VERTICAL;
	// @ Events
	const handleSearchTextChange = (e) => setSearchText(e.target.value);
	// @Effects
	useEffect(() => {
		setList(search(searchText));
	}, [searchText]);

	return (
		<div
			className={`container ${
				isVertical ? "vertical-container" : "horizontal-container"
			}`}
		>
			<label htmlFor="search-input">{_T("Search")}</label>
			<DebounceInput
				id="search-input"
				className="search-input"
				data-testid="search-input"
				minLength={1}
				debounceTimeout={DEBOUNCE_TIME}
				onChange={handleSearchTextChange}
			/>
			<ResultList list={list} />
		</div>
	);
};

export const ORIENTATION = {
	VERTICAL: "VERT",
	HORIZONTAL: "HORZ",
};
