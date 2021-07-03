--Create a query to list out the following statistics from the table of events:

--Your query won't need a GROUP BY, as you're not grouping by anything - just a SELECT and a FROM.

SELECT
	COUNT(tblEvent.EventID) AS "Number of events",
	MIN(tblEvent.EventDate) AS "Last date",
	MAX(tblEvent.EventDate) AS "First date"
FROM
	tblEvent