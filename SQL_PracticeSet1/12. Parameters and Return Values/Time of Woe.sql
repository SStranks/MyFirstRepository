-- The aim of this exercise is to link two stored procedures together. Start by creating a stored procedure which shows the ContinentName where the first event occurred.

ALTER PROC spFirstEventContinent(@FirstContinent varchar(100) = NULL output) AS
SELECT TOP 1
	@FirstContinent = tblContinent.ContinentName
FROM
	tblContinent
	INNER JOIN tblCountry ON
		tblCountry.ContinentID = tblContinent.ContinentID
	INNER JOIN tblEvent ON
		tblCountry.CountryID = tblEvent.CountryID
ORDER BY
	tblEvent.EventDate
GO

-- Now create a second stored procedure which filters events to show only those which happened in the continent passed in via a parameter. Run this with Europe:
CREATE PROC spContinentEvents(@Continent varChar(100) = NULL) AS
SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblContinent.ContinentName
FROM
	tblContinent
	INNER JOIN tblCountry ON
		tblCountry.ContinentID = tblContinent.ContinentID
	INNER JOIN tblEvent ON
		tblCountry.CountryID = tblEvent.CountryID
WHERE
	(@Continent IS NULL OR tblContinent.ContinentName = @Continent)
ORDER BY
	tblEvent.EventDate
END

--Using an output parameter take the ContinentName produced by the first stored procedure and store it in a variable. Use this variable to filter the second procedure.
DECLARE @Variable varChar(100) = ''
EXEC spFirstEventContinent @FirstContinent = @Variable OUTPUT
EXEC spContinentEvents @Continent = @Variable