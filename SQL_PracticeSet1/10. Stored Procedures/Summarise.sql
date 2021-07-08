--Create a procedure called spSummariseEpisodes to show:

--the 3 most frequently-appearing companions; then separately
--the 3 most frequently-appearing enemies.

-- CREATE PROC spSummariseEpisodes AS
SELECT TOP 3
	tblCompanion.CompanionName,
	COUNT(*) AS Episodes
FROM
	tblCompanion
	INNER JOIN tblEpisodeCompanion ON
		tblCompanion.CompanionId = tblEpisodeCompanion.CompanionId
	INNER JOIN tblEpisode ON
		tblEpisode.EpisodeId = tblEpisodeCompanion.EpisodeId
GROUP BY
	tblCompanion.CompanionName
ORDER BY
	COUNT(*) DESC

SELECT TOP 3
	tblEnemy.EnemyName,
	COUNT(*) AS Episodes
FROM
	tblEnemy
	INNER JOIN tblEpisodeEnemy ON
		tblEnemy.EnemyId = tblEpisodeEnemy.EnemyId
	INNER JOIN tblEpisode ON 
		tblEpisode.EpisodeId = tblEpisodeEnemy.EpisodeId
GROUP BY
	tblEnemy.EnemyName
ORDER BY
	COUNT(*) DESC

-- Change your script to alter your procedure so that it shows the 5 least-frequently appearing companions, and 5 least-frequently appearing enemies.

ALTER PROC spSummariseEpisodes AS

SELECT TOP 5
	tblCompanion.CompanionName,
	COUNT(*) AS Episodes
FROM
	tblCompanion
	INNER JOIN tblEpisodeCompanion ON
		tblCompanion.CompanionId = tblEpisodeCompanion.CompanionId
	INNER JOIN tblEpisode ON
		tblEpisode.EpisodeId = tblEpisodeCompanion.EpisodeId
GROUP BY
	tblCompanion.CompanionName
ORDER BY
	COUNT(*)

SELECT TOP 5
	tblEnemy.EnemyName,
	COUNT(*) AS Episodes
FROM
	tblEnemy
	INNER JOIN tblEpisodeEnemy ON
		tblEnemy.EnemyId = tblEpisodeEnemy.EnemyId
	INNER JOIN tblEpisode ON 
		tblEpisode.EpisodeId = tblEpisodeEnemy.EpisodeId
GROUP BY
	tblEnemy.EnemyName
ORDER BY
	COUNT(*)