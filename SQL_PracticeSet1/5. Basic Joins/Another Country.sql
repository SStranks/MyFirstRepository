--Create a query using an outer join to list out those countries which have no corresponding events.

--If you succeed, you should get a country which has no events despite having the world's fourth largest population.

SELECT
	tblCountry.CountryName
FROM
	tblCountry 
	FULL OUTER JOIN tblEvent
	ON tblCountry.CountryID = tblEvent.CountryID
WHERE
	tblEvent.EventID IS NULL