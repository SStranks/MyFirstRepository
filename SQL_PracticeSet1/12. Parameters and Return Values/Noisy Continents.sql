--The aim of this exercise is to create a stored procedure which will output a variable containing a comma-delimited list of the continents which have 50 or more events. Start by selecting these continents in a stored procedure:

CREATE PROC uspContinentsWith50Events
(@ContinentList VARCHAR(MAX) = '' OUTPUT) AS

SELECT
	@ContinentList += 
	ContinentName + ', '
FROM 
	tblContinent
	INNER JOIN tblCountry ON
		tblContinent.ContinentID = tblCountry.ContinentID
	INNER JOIN tblEvent ON
		tblCountry.CountryID = tblEvent.CountryID
GROUP BY
	tblContinent.ContinentName
HAVING
	COUNT(EventID) > 50


DECLARE @ListOfContinents VARCHAR(MAX) = '' 
EXEC uspContinentsWith50Events @ContinentList = @ListOfContinents OUTPUT
SELECT LEFT(@ListOfContinents, LEN(@ListOfContinents)-1) AS 'Big happenings'