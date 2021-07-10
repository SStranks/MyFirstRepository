-- First write a stored procedure to show which country has the most events:

CREATE PROC spMostNumerous(@TopCountry varChar(100) OUTPUT, @EventCount int OUTPUT) AS
SELECT TOP 1
	@TopCountry = tblCountry.CountryName,
	@EventCount = COUNT(tblEvent.EventID)
FROM
	tblCountry
	INNER JOIN tblEvent ON
		tblCountry.CountryID = tblEvent.CountryID
GROUP BY
	tblCountry.CountryName
ORDER BY
	COUNT(tblEvent.EventID) DESC


DECLARE	@TopCountry varChar(100)
DECLARE	@EventCount int
EXEC spMostNumerous
	@TopCountry = @TopCountry OUTPUT,
	@EventCount = @EventCount OUTPUT
SELECT 'The country with the most events is ' + @TopCountry + ', with ' + CAST(@EventCount AS varChar(5)) + ' events.'