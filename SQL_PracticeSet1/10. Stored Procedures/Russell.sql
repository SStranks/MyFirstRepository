-- Using the tblAuthor and tblEpisode tables, create a stored procedure called spMoffats to list out the 32 episodes written by Steven Moffat in date order (with the most recent first):

-- CREATE PROC spMoffats AS
SELECT
	tblEpisode.Title,
	tblAuthor.AuthorName
FROM
	tblEpisode
	INNER JOIN tblAuthor ON
		tblEpisode.AuthorId = tblAuthor.AuthorId
WHERE
	tblAuthor.AuthorName = 'Steven Moffat'
ORDER BY
	tblEpisode.EpisodeDate DESC

--Now amend your SQL so that it creates a different stored procedure called spRussell, listing out the 30 episodes penned by people called Russell:

CREATE PROC spRussell AS
SELECT
	tblEpisode.Title,
	tblAuthor.AuthorName
FROM
	tblEpisode
	INNER JOIN tblAuthor ON
		tblEpisode.AuthorId = tblAuthor.AuthorId
WHERE
	tblAuthor.AuthorName LIKE '%Russell%'
ORDER BY
	tblEpisode.EpisodeDate DESC