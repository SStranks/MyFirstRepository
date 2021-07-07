USE [DoctorWho]
GO

/****** Object:  View [dbo].[vwSeriesOne]    Script Date: 07/07/2021 17:27:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

/* Create a new query, and write script to create a new view.  
 Finish your script so that it creates a view to show all of the episodes in series 1, then execute the script to create your view:*/
ALTER VIEW [dbo].[vwSeriesOne]
AS
SELECT        
	Title, SeriesNumber, 
	EpisodeNumber
FROM            
	dbo.tblEpisode
WHERE        
	(SeriesNumber = 2)
GO

-- show all of the rows returned from the view
SELECT * FROM vwSeriesOne


