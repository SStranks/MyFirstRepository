USE [WorldEvents]
GO

/****** Object:  View [dbo].[vwEverything]    Script Date: 07/07/2021 17:14:35 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--Write the script to generate a view called vwEverything (based on the tblCategory, tblEvent, tblCountry and tblContinent tables) to show this data:

ALTER VIEW [dbo].[vwEverything] AS 
SELECT
	tblCategory.CategoryName AS Category,
	tblContinent.ContinentName AS Continent,
	tblCountry.CountryName AS Country,
	tblEvent.EventName,
	tblEvent.EventDate
FROM
	tblEvent INNER JOIN
	tblCategory ON
		tblEvent.CategoryID = tblCategory.CategoryID
	INNER JOIN tblCountry ON
		tblEvent.CountryID = tblCountry.CountryID
	INNER JOIN tblContinent ON
		tblCountry.ContinentID = tblContinent.ContinentID
GO

-- Now write a query which selects data from this view to show the number of events by category within Africa:

SELECT
	Category,
	COUNT(*) AS NumberEvents
FROM 
	vwEverything
WHERE
	Continent = 'Africa'
GROUP BY 
	Category
ORDER BY 
	NumberEvents DESC

