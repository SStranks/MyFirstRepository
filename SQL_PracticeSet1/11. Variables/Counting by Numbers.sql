-- Start a query, creating a variable to hold the id number of the Doctor Who episode whose details you want to show:

-- the episode number of interest
DECLARE @EpisodeId int = 42
DECLARE @EpisodeName varChar(150)
DECLARE @NumberCompanions int 
DECLARE @NumberEnemies int

SET @EpisodeName = 
	(
		SELECT tblEpisode.Title
		FROM tblEpisode 
		WHERE tblEpisode.EpisodeId = @EpisodeId
	)	
SET @NumberCompanions =
	(
		SELECT COUNT(*)
		FROM tblEpisodeCompanion
		WHERE tblEpisodeCompanion.EpisodeId = @EpisodeId
	)
SET @NumberEnemies = 
	(
		SELECT COUNT(*)
		FROM tblEpisodeEnemy
		WHERE tblEpisodeEnemy.EpisodeId = @EpisodeId
	)

SELECT
	@EpisodeName as Title,
	@EpisodeId as 'Episode id',
	@NumberCompanions as 'Number of companions',
	@NumberEnemies as 'Number of enemies'