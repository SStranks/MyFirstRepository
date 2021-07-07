--Create a subquery to list out all of those events whose:

--Country id is not in the list of the last 30 country ids in alphabetical order; and
--Category id is not in the list of the last 15 category ids in alphabetical order.

SELECT
	tblEvent.EventName,
	tblEvent.EventDetails
FROM
	tblEvent
	INNER JOIN tblCountry ON
		tblEvent.CountryID = tblCountry.CountryID
	INNER JOIN tblCategory ON
		tblCategory.CategoryID = tblEvent.CategoryID
WHERE
	tblCountry.CountryID NOT IN
	(
		SELECT TOP 30
			tblCountry.CountryID
		FROM
			tblCountry
		ORDER BY
			tblCountry.CountryName DESC
	)
	AND
	tblCategory.CategoryID NOT IN
	(
		SELECT TOP 15
			tblCategory.CategoryID
		FROM
			tblCategory
		ORDER BY
			tblCategory.CategoryName DESC
	)
ORDER BY
	tblEvent.EventDate