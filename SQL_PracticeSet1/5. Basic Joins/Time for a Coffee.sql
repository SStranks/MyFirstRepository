--Create a query to list out the appearances of enemies in episodes which have length under 40 characters, where the length is defined as the sum of:

--the number of characters in the author's name;
--the number of characters in the episode's title;
--the number of characters in the doctor's name; and
--the number of characters in the enemy's name.

SELECT
	tblAuthor.AuthorName,
	tblEpisode.Title,
	tblDoctor.DoctorName,
	tblEnemy.EnemyName,
	LEN(tblAuthor.AuthorName) + LEN(tblEpisode.Title) + LEN(tblDoctor.DoctorName) + LEN(tblEnemy.EnemyName) AS "Total length"
FROM
	tblEpisode 
	INNER JOIN tblAuthor ON
		tblEpisode.AuthorId = tblAuthor.AuthorId
	INNER JOIN tblDoctor ON
		tblDoctor.DoctorId = tblEpisode.DoctorId
	INNER JOIN tblEpisodeEnemy ON
		tblEpisodeEnemy.EpisodeId = tblEpisode.EpisodeId
	INNER JOIN tblEnemY ON
		tblEnemy.EnemyId = tblEpisodeEnemy.EnemyId
		
WHERE
	LEN(tblAuthor.AuthorName) + LEN(tblEpisode.Title) + LEN(tblDoctor.DoctorName) + LEN(tblEnemy.EnemyName) < 40