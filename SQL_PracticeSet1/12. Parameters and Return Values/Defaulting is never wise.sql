-- Create a stored procedure called uspContinentEvents which filters events to show only those:

--which took place in a given continent;
--which took place on or after a given date; and
--which took place on or before a given date.
--When you run your procedure, it should show something like this:

--CREATE PROC uspContinentEvents(@Continent varChar(100), @EventStart datetime, @EventEnd datetime) AS
--SELECT
--	tblContinent.ContinentName,
--	tblEvent.EventName,
--	tblEvent.EventDate
--FROM
--	tblContinent
--	INNER JOIN tblCountry ON
--		tblContinent.ContinentID = tblCountry.ContinentID
--	INNER JOIN tblEvent ON
--		tblCountry.CountryID = tblEvent.CountryID
--WHERE
--	(tblContinent.ContinentName LIKE '%' + @Continent + '%')
--	AND
--	(tblEvent.EventDate BETWEEN @EventStart AND @EventEnd)

--uspContinentEvents @Continent='Asia', @EventStart='1990-01-01', @EventEnd='2000-01-01'

-- Unless you are using default values, all parameters must have a value. Set default values for each parameter to be the widest range that you can:

ALTER PROC uspContinentEvents(@Continent varChar(100) = '', @EventStart datetime = '1753-01-01', @EventEnd datetime = '9999-12-31') AS
SELECT
	tblContinent.ContinentName,
	tblEvent.EventName,
	tblEvent.EventDate
FROM
	tblContinent
	INNER JOIN tblCountry ON
		tblContinent.ContinentID = tblCountry.ContinentID
	INNER JOIN tblEvent ON
		tblCountry.CountryID = tblEvent.CountryID
WHERE
	(tblContinent.ContinentName LIKE '%' + @Continent + '%')
	AND
	(tblEvent.EventDate BETWEEN @EventStart AND @EventEnd)

uspContinentEvents @Continent='Asia', @EventStart='1990-01-01', @EventEnd='2000-01-01'