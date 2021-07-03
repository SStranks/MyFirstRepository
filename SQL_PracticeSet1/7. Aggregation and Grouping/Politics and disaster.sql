--Create a query which:

--groups by the category name from the category table; and
--counts the number of events for each.
--You'll need to create a join between the tblCategory and tblEvent tables to do this.

SELECT
	tblCategory.CategoryName,
	COUNT(tblCategory.CategoryName) AS "Number of events"
FROM
	tblCategory
	INNER JOIN tblEvent ON
	tblCategory.CategoryID = tblEvent.CategoryID
GROUP BY
	tblCategory.CategoryName
ORDER BY
	COUNT(tblCategory.CategoryName) DESC