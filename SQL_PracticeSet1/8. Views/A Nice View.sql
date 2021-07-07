USE [WorldEvents]
GO

/****** Object:  View [dbo].[EventsByCategory]    Script Date: 07/07/2021 17:34:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER VIEW [dbo].[EventsByCategory]
AS
SELECT TOP (100) PERCENT 
	dbo.tblCategory.CategoryName AS Category, 
	COUNT(dbo.tblEvent.EventName) AS What
FROM            
	dbo.tblEvent INNER JOIN
    dbo.tblCategory ON 
		dbo.tblEvent.CategoryID = dbo.tblCategory.CategoryID
GROUP BY 
	dbo.tblCategory.CategoryName
ORDER BY 
	What ASC
GO

SELECT *
FROM
	EventsByCategory
WHERE
-- more than 50 events
	What > 50

