--Write a query which lists out countries which have more than 8 events, using a correlated subquery rather than HAVING. 

SELECT
	tblCountry.CountryName
FROM
	tblCountry
WHERE
	(
		SELECT COUNT(*)
		FROM tblEvent 
		WHERE tblEvent.CountryID = tblCountry.CountryID
	) > 8
ORDER BY
	tblCountry.CountryName
