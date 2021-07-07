-- List all of the episodes which had only a single companion.
CREATE VIEW vwEpisodeCompanion AS
SELECT
	e.EpisodeId,
	e.Title,
	COUNT(*) as NumberEpisodes
FROM
	tblEpisode AS e
	INNER JOIN tblEpisodeCompanion AS ec ON 
		e.EpisodeId = ec.EpisodeId
GROUP BY
	e.EpisodeId,
	e.Title
HAVING
	COUNT(*) = 1

-- List all of the episodes which had only a single enemy.
CREATE VIEW vwEpisodeEnemy AS
SELECT
	e.EpisodeId,
	e.Title,
	COUNT(*) as NumberEpisodes
FROM
	tblEpisode AS e
	INNER JOIN tblEpisodeEnemy AS ec ON 
		e.EpisodeId = ec.EpisodeId
GROUP BY
	e.EpisodeId,
	e.Title
HAVING
	COUNT(*) = 1


-- List all of the episodes which have no corresponding rows in either the vwEpisodeCompanion or vwEpisodeEnemy tables.
CREATE VIEW vwEpisodeSummary AS
SELECT
	e.EpisodeId,
	e.Title
FROM
	tblEpisode AS e
	LEFT OUTER JOIN vwEpisodeEnemy AS en ON 
		e.EpisodeId = en.EpisodeId
	LEFT OUTER JOIN vwEpisodeCompanion AS c ON 
		e.EpisodeId = c.EpisodeId
WHERE
	en.EpisodeId is null and
	c.EpisodeId is null

-- Select all of the rows selected by the vwEpisodeSummary view in title order
SELECT * FROM vwEpisodeSummary
ORDER BY 
	Title
