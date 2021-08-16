import { countries } from "./data";

// This function should implement a search simple function that accepts input and returns matching results.
//
// Requirements:
// - string input should return all countries with a name or code match
//
// - "Gambia" should return:
//   [{name: 'Gambia', code: 'GM'}]
//
// - "GM" should return:
//   [{name: 'Gambia', code: 'GM'}]
//
// - "French" should return:
//   [
//     {name: 'French Guiana', code: 'GF'},
//     {name: 'French Polynesia', code: 'PF'},
//     {name: 'French Southern Territories', code: 'TF'}
//   ]
//
// - regex input should return all countries with a name or code match
//
// - /British/ should return:
//   [
//     {name: 'British Indian Ocean Territory', code: 'IO'},
//     {name: 'Virgin Islands, British', code: 'VG'}
//   ]
//
// - /^British/ should return:
//   [
//     {name: 'British Indian Ocean Territory', code: 'IO'},
//   ]
//
// - empty string/null/undefined input should result in an empty array
//
// - see the searchApi.test.js file for unit tests
//
export const search = (searchInput = "") => {
	const isRegex =
		searchInput[0] === "/" && searchInput[searchInput.length - 1] === "/";
	const regex = new RegExp(searchInput.slice(1, -1), "i");

	if (searchInput) {
		return countries.filter(({ name, code }) => {
			if (isRegex) {
				return (
					regex.test(name?.toLowerCase()) ||
					regex.test(code?.toLowerCase())
				);
			}
			return (
				name?.toLowerCase().startsWith(searchInput.toLowerCase()) ||
				code?.toLowerCase().startsWith(searchInput.toLowerCase())
			);
		});
	}
	return [];
};
