--Create a query which shows two statistics for each category initial:

--The number of events for categories beginning with this letter; and
--The average length in characters of the event name for categories beginning with this letter.

-- You'll need to use the following functions at some point: CAST or CONVERT, AVG, COUNT, LEN, UPPER and LEFT!

SELECT
	LEFT(tblCategory.CategoryName, 1) AS "Category initial",
	COUNT(*) AS "Number of events",
	FORMAT(AVG(CAST(LEN(tblEvent.EventName) AS decimal(4,2))), '0.00') AS "Average event name length"
FROM
	tblEvent 
	INNER JOIN tblCategory ON
	tblEvent.CategoryID = tblCategory.CategoryID
GROUP BY
	LEFT(tblCategory.CategoryName, 1)
