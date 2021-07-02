-- Write a query using inner joins to show all of the authors who have written episodes featuring the Daleks. 

SELECT
	tblEpisode.Title,
	tblAuthor.AuthorName
FROM
	tblEpisode 
	INNER JOIN tblAuthor ON
	tblEpisode.AuthorId = tblAuthor.AuthorId
	INNER JOIN tblEpisodeEnemy ON
	tblEpisode.EpisodeId = tblEpisodeEnemy.EpisodeId
	INNER JOIN tblEnemy ON
	tblEpisodeEnemy.EnemyId = tblEnemy.EnemyId
WHERE
	tblEnemy.EnemyName LIKE '%Dalek%'