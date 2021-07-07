-- Create a query which lists out all of the events in the tblEvent table which happened after the last one for country 21 (International) took place.

SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblCountry.CountryName
FROM
	tblEvent
	INNER JOIN tblCountry ON
	tblEvent.CountryID = tblCountry.CountryID
WHERE
	tblEvent.EventDate > 
		(
			SELECT MAX(tblEvent.EventDate)
			FROM tblEvent
			WHERE CountryID = 21
		)
ORDER BY
	tblEvent.EventDate DESC