--Use this to list the names of the companions who haven't featured in any episodes.  You should find there's one of them, but we won't spoil the surprise by saying who it is!

--Create a query based on the companions table, with an outer join to the episode companion table.

SELECT
	tblCompanion.CompanionName
FROM
	tblCompanion
	FULL OUTER JOIN tblEpisodeCompanion ON
	tblCompanion.CompanionId = tblEpisodeCompanion.CompanionId
WHERE
	tblEpisodeCompanion.EpisodeId IS NULL