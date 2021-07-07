-- Write a SELECT statement to return events from the 3 continents with the fewest events. To do this first write a SELECT query which returns all the continents and events.

SELECT TOP 3
	tblContinent.ContinentName,
	tblEvent.EventName
FROM
	tblContinent
	INNER JOIN tblCountry ON
		tblContinent.ContinentID = tblCountry.ContinentID
	INNER JOIN tblEvent ON
		tblEvent.CountryID = tblCountry.CountryID

-- Now underneath write another SELECT statemnt which lists  events for the 3 continents with the lowest COUNT of events. Put the COUNT in the ORDER BY clause, not the SELECT.
SELECT TOP 3
	tblContinent.ContinentName
FROM
	tblContinent
	INNER JOIN tblCountry ON
		tblContinent.ContinentID = tblCountry.ContinentID
	INNER JOIN tblEvent ON
		tblEvent.CountryID = tblCountry.CountryID
GROUP BY
	tblContinent.ContinentName
ORDER BY
	COUNT(*)

-- Finally use the second SELECT as a filter in the first SELECT's WHERE clause. To do this use ContinentName IN (Sub Query).
SELECT
	tblContinent.ContinentName,
	tblEvent.EventName
FROM
	tblEvent
	INNER JOIN tblCountry ON
		tblEvent.CountryID = tblCountry.CountryID
	INNER JOIN tblContinent ON
		tblCountry.ContinentID = tblContinent.ContinentID
WHERE
	tblContinent.ContinentName IN
		(
			SELECT TOP 3
				tblContinent.ContinentName
			FROM
				tblContinent
				INNER JOIN tblCountry ON
					tblContinent.ContinentID = tblCountry.ContinentID
				INNER JOIN tblEvent ON
					tblEvent.CountryID = tblCountry.CountryID
			GROUP BY
				tblContinent.ContinentName
			ORDER BY
				COUNT(*)
		)
