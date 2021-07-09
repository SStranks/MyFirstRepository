-- Using the following tables, create a query to show all of the episodes which feature enemies containing the letters Dalek: 

ALTER PROC spEnemyEpisodes(@EnemyName varchar(100)) AS
SELECT
	tblEpisode.SeriesNumber,
	tblEpisode.EpisodeNumber,
	tblEpisode.Title
FROM
	tblEpisode
	INNER JOIN tblEpisodeEnemy ON
		tblEpisode.EpisodeId = tblEpisodeEnemy.EpisodeId
	INNER JOIN tblEnemy ON
		tblEnemy.EnemyId = tblEpisodeEnemy.EnemyId
WHERE
	tblEnemy.EnemyName LIKE '%' + @EnemyName + '%'
ORDER BY
	tblEpisode.SeriesNumber,
	tblEpisode.EpisodeNumber
GO

spEnemyEpisodes 'ood'	-- 4 episodes featuring the Ood
--spEnemyEpisodes 'auton'	-- 1 episode featuring the Auton
--spEnemyEpisodes 'silence'	-- 5 episodes featuring the Silence
