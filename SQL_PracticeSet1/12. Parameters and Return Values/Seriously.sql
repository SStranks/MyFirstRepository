-- Create a stored procedure called spListEpisodes to list out all of the episodes for a given series number.  For example to see the 14 episodes in series 2 you could run this query:

CREATE PROC spListEpisodes(@SeriesNum as int = NULL) AS
SELECT
	tblEpisode.Title,
	tblEpisode.EpisodeNumber
FROM
	tblEpisode
WHERE
	(@SeriesNum IS NULL OR tblEpisode.SeriesNumber = @SeriesNum)

-- show all of the episodes for series 2
spListEpisodes 2
-- show all of the episodes
spListEpisodes