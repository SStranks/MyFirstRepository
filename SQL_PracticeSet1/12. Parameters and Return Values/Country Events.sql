-- Create a stored procedure to list out the EventName, EventDate and Country fields (to do this you will need to join the tblEvent and tblCountry tables together using CountryID):

--ALTER PROC spEventsProc1 AS
--SELECT
--	tblEvent.EventName,
--	tblEvent.EventDate,
--	tblCountry.CountryName
--FROM
--	tblEvent
--	INNER JOIN tblCountry ON
--		tblEvent.CountryID = tblCountry.CountryID

-- Once you have done this, add a parameter to your stored procedure that will take in the country name of interest and use this to filter the rows displayed:

ALTER PROC spEventsProc1(@CountryName varChar(100)) AS
SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblCountry.CountryName
FROM
	tblEvent
	INNER JOIN tblCountry ON
		tblEvent.CountryID = tblCountry.CountryID
WHERE
	tblCountry.CountryName LIKE '%' + @CountryName + '%'

spEventsProc1 @CountryName = 'SPAIN'