-- The aim of this exercise is to generate a list of events that occurred in the year that you were born:

-- To do this, first create two appropriately named variables to store the first date of your year of birth and the last,  then use these variables to filter your results to show only events occurring between these two dates.

DECLARE @yearStart datetime = '1964-01-01'
DECLARE @yearEnd datetime = '1964-12-31'

SELECT
	tblEvent.EventName,
	tblEvent.EventDate,
	tblCountry.CountryName
FROM 
	tblEvent
	INNER JOIN tblCountry ON
		tblEvent.CountryID = tblCountry.CountryID
WHERE
	tblEvent.EventDate BETWEEN @yearStart AND @yearEnd