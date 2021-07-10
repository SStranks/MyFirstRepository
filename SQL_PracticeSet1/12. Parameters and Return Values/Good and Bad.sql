--The aim of this exercise is to create a stored procedure called spGoodAndBad which shows the number of Doctor Who's companions and enemies for a given series number.  For example, you could run this SQL:
CREATE PROC spGoodAndBad(@SeriesNumber INT = NULL, @NumEnemies INT OUTPUT, @NumCompanions INT OUTPUT ) AS
SELECT
	@NumEnemies = COUNT(DISTINCT tblEnemy.EnemyId),
	@NumCompanions = COUNT(DISTINCT tblCompanion.CompanionId)
FROM
	tblEpisode
	INNER JOIN tblEpisodeCompanion ON
		tblEpisode.EpisodeId = tblEpisodeCompanion.EpisodeId
	INNER JOIN tblCompanion ON
		tblEpisodeCompanion.CompanionId = tblCompanion.CompanionId
	INNER JOIN tblEpisodeEnemy ON
		tblEpisode.EpisodeId = tblEpisodeEnemy.EpisodeId
	INNER JOIN tblEnemy ON
		tblEnemy.EnemyId = tblEpisodeEnemy.EnemyId
WHERE
	tblEpisode.SeriesNumber = @SeriesNumber


-- choose series number for which to display info
DECLARE @SeriesNumber int = 1
-- variables to hold answers
DECLARE @NumEnemies int
DECLARE @NumCompanions int
EXEC spGoodAndBad @SeriesNumber, @NumEnemies output, @NumCompanions output
-- show the results
SELECT
@SeriesNumber AS 'Series number',
@NumEnemies AS 'Number of enemies',
@NumCompanions AS 'Number of companions'