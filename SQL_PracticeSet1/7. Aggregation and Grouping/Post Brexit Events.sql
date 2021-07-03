-- Create a query listing out for each continent and country the number of events taking place therein:

SELECT
	tblContinent.ContinentName AS "Continent",
	tblCountry.CountryName AS "Country",
	COUNT(*) AS "Number of events"
FROM	
	tblContinent
	INNER JOIN tblCountry ON
	tblContinent.ContinentID = tblCountry.ContinentID
	INNER JOIN tblEvent ON
	tblEvent.CountryID = tblCountry.CountryID
GROUP BY
	tblContinent.ContinentName,
	tblCountry.CountryName
ORDER BY
	tblCountry.CountryName

-- Now change your query so that it omits events taking place in the continent of Europe:
SELECT
	tblContinent.ContinentName AS "Continent",
	tblCountry.CountryName AS "Country",
	COUNT(*) AS "Number of events"
FROM	
	tblContinent
	INNER JOIN tblCountry ON
	tblContinent.ContinentID = tblCountry.ContinentID
	INNER JOIN tblEvent ON
	tblEvent.CountryID = tblCountry.CountryID
GROUP BY
	tblContinent.ContinentName,
	tblCountry.CountryName
HAVING
	tblContinent.ContinentName <> 'Europe'
ORDER BY
	tblCountry.CountryName

-- Finally, change your query so that it only shows countries having 5 or more events:
SELECT
	tblContinent.ContinentName AS "Continent",
	tblCountry.CountryName AS "Country",
	COUNT(*) AS "Number of events"
FROM	
	tblContinent
	INNER JOIN tblCountry ON
	tblContinent.ContinentID = tblCountry.ContinentID
	INNER JOIN tblEvent ON
	tblEvent.CountryID = tblCountry.CountryID
WHERE
	tblContinent.ContinentName <> 'Europe'
GROUP BY
	tblContinent.ContinentName,
	tblCountry.CountryName
HAVING
	COUNT(*) >= 5
ORDER BY
	tblCountry.CountryName
