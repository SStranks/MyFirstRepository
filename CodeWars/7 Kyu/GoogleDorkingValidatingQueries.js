// The term "google dorking" describes the process of using filters (also called "operators") in google search queries which limit the search results according to the used filters. It's a technique often used by "hackers" in order to find valuable information about a target. But thats not what we do here

// The syntax of most filters looks as following: <filter>:<value>

// Hence, a complete search query could look like

// intext:kyu site:codewars.com
// If you enter the above query into Googles search bar, your results are limited to codewars.com and every result page should contain the word kyu.

// Pretty useful, huh?

// Task
// A coder friend of yours gave you some queries which -he promises- will return interesting results. But some of the queries contain outdated filters which don't work anymore. Hence, you decide to code a function named is_valid (isValid for js) which takes in a search query of type str and validates that every filter within the query is up-to-date. If only one filter is invalid, then the entire query is invalid.

// Preloaded
// FILTERS - An array of valid search filters

// Note
// A search query will contain 0 < n < 100 filters
// Your function should return true for valid and false for invalid
// Each filter follows the <filter-name>:<value> syntax

// Filters are seperated by a space (\s)
// You only need to check if the filter-name is valid

// For a filter-name to be valid, the FILTERS array must contain this filter-name.

// My Solution
const isValid = (query) => {
  return (query.match(/\w+(?=:)/g) || []).every((el) => FILTERS.includes(el));
};
