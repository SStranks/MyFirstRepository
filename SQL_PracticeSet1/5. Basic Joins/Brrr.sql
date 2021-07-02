--Create a query to link together the following 3 tables:

--tblContinent
--tblCountry
--tblEvent
--Your query should list out those events which took place in either:

--the continent called Antarctic; or
--the country called Russia.

SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblCountry.CountryName,
	tblContinent.ContinentName
FROM
	tblEvent 
	INNER JOIN tblCountry ON
	tblEvent.CountryID = tblCountry.CountryID
	INNER JOIN tblContinent ON
	tblCountry.ContinentID = tblContinent.ContinentID

WHERE
	tblContinent.ContinentName = 'Antarctic'
	OR
	tblCountry.CountryName = 'Russia'

