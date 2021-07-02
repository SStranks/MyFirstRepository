--It's traditional to express a country's size in terms of how many times you could fit Wales into it - so let's do this!  First create the following columns in a query:

--Column			What it should show
--AreaLeftOver		The remainder when you divide a country's area by the area of Wales
--WalesUnits		The number of exact times that the area of Wales divides a country's area, once you've subtracted the area						left over as calculated above

--You'll need to know that Wales is 20,761 square kilometres in area!

SELECT 
	Country, KmSquared, (KmSquared / 20761) AS WalesUnits, (KmSquared % 20761) AS AreaLeftOver
FROM
	CountriesByArea
ORDER BY
	Country

--Now extend your query to show a text description of how many times each country could accommodate Wales:

SELECT 
	Country, KmSquared, (KmSquared / 20761) AS WalesUnits, (KmSquared % 20761) AS AreaLeftOver, 
	CASE 
		WHEN KmSquared < 20761 THEN 'Smaller than Wales'
	ELSE
		CAST((KmSquared / 20761) AS VARCHAR(10)) + ' x Wales plus ' + CAST((KmSquared % 20761) AS VARCHAR(10)) + ' sq. km'
	END AS WalesComparison
FROM
	CountriesByArea
ORDER BY
	Country

--Finally, change your query's sort order so that it lists countries with the closest in size to Wales first:

SELECT 
	Country, KmSquared, (KmSquared / 20761) AS WalesUnits, (KmSquared % 20761) AS AreaLeftOver,
	CASE 
		WHEN KmSquared < 20761 THEN 'Smaller than Wales'
	ELSE
		CAST((KmSquared / 20761) AS VARCHAR(10)) + ' x Wales plus ' + CAST((KmSquared % 20761) AS VARCHAR(10)) + ' sq. km'
	END AS WalesComparison
FROM
	CountriesByArea
ORDER BY
	ABS(KmSquared - 20761)