--Use this to show for each author:

--the number of episodes they wrote;
--their earliest episode date; and
--their latest episode date.
--If you sort these so that the most prolific authors come first, here are the first few of the 25 rows you should see:

SELECT
	tblAuthor.AuthorName,
	COUNT(tblAuthor.AuthorName) AS "Episodes",
	MIN(tblEpisode.EpisodeDate) AS "Earliest date",
	MAX(tblEpisode.EpisodeDate) AS "Latest date"
FROM
	tblAuthor
	INNER JOIN
	tblEpisode ON
	tblAuthor.AuthorId = tblEpisode.AuthorId
GROUP BY
	tblAuthor.AuthorName
ORDER BY
	COUNT(tblAuthor.AuthorName) DESC