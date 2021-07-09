-- The aim of this exercise is to show a list of all of the Doctor's enemies for a given episode:

-- To start this, create a variable in a new query to hold the episode number:
DECLARE @EpisodeId int = 15

-- Now create another variable to hold the accumulated list of episode names:
DECLARE @EnemyList varchar(100) = ''

-- Write a SELECT statement which accumulates the list of enemy names for the chosen episode in a variable.  The basis of this will be a statement starting like this:

SELECT
	@EnemyList = @EnemyList + 
	CASE WHEN len(@EnemyList) > 0 THEN ', ' ELSE '' END + 
	tblEnemy.EnemyName
FROM
	tblEpisodeEnemy
	INNER JOIN tblEnemy ON 
	tblEpisodeEnemy.EnemyId = tblEnemy.EnemyId
WHERE
	tblEpisodeEnemy.EpisodeId = @EpisodeId

-- When you've done this, complete your query to show your results:
SELECT
	@EpisodeId as 'Episode id',
	@EnemyList AS 'Enemies'