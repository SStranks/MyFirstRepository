--Write a query to list out for each episode year and enemy the number of episodes made, but in addition:

--Only show episodes made by doctors born before 1970; and
--Omit rows where an enemy appeared in only one episode in a particular year.

SELECT
	YEAR(tblEpisode.EpisodeDate) AS "Episode Year",
	tblEnemy.EnemyName AS "EnemyName",
	COUNT(*) AS "Number of episodes"
FROM
	tblEpisode
	INNER JOIN tblDoctor ON
	tblEpisode.DoctorId = tblDoctor.DoctorId
	INNER JOIN tblEpisodeEnemy ON
	tblEpisode.EpisodeId = tblEpisodeEnemy.EpisodeId
	INNER JOIN tblEnemy ON
	tblEpisodeEnemy.EnemyId = tblEnemy.EnemyId
WHERE
	YEAR(tblDoctor.BirthDate) < 1970
GROUP BY
	YEAR(tblEpisode.EpisodeDate),
	tblEnemy.EnemyName
HAVING
	COUNT(*) > 1
ORDER BY
	"Number of episodes" DESC