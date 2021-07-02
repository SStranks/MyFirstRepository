--Create a query which uses an inner join to link the categories table to the events table (they share a column/field called CategoryId):

SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblCategory.CategoryName
FROM
	tblEvent INNER JOIN
	tblCategory ON
	tblEvent.CategoryID = tblCategory.CategoryID

-- Change the inner join to an outer join, so that you show for each category its events - even when there aren't any:

SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblCategory.CategoryName
FROM
	tblEvent FULL OUTER JOIN
	tblCategory ON
	tblEvent.CategoryID = tblCategory.CategoryID
ORDER BY
	tblEvent.EventDate DESC

-- Add a WHERE clause to show only those categories which don't have any corresponding events:

SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblCategory.CategoryName
FROM
	tblEvent FULL OUTER JOIN
	tblCategory ON
	tblEvent.CategoryID = tblCategory.CategoryID
WHERE
	tblEvent.EventName IS NULL
ORDER BY
	tblEvent.EventDate DESC