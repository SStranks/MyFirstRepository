USE [DoctorWho]
GO

/****** Object:  View [dbo].[vwEpisodesByFirstLetter]    Script Date: 07/07/2021 16:53:09 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER VIEW [dbo].[vwEpisodesByFirstLetter]
AS
SELECT        
	dbo.tblAuthor.AuthorName, 
	dbo.tblDoctor.DoctorName, 
	dbo.tblEpisode.Title, 
	dbo.tblEpisode.EpisodeDate
FROM            
	dbo.tblAuthor 
	INNER JOIN dbo.tblEpisode ON 
		dbo.tblAuthor.AuthorId = dbo.tblEpisode.AuthorId 
	INNER JOIN dbo.tblDoctor ON 
		dbo.tblEpisode.DoctorId = dbo.tblDoctor.DoctorId
WHERE        (dbo.tblEpisode.Title LIKE N'H%')
GO

-- show all of the H episodes

SELECT * FROM vwEpisodesByFirstLetter

