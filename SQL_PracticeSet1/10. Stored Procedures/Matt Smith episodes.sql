-- Write a SELECT statement in SQL to list out all of the episodes which featured Matt Smith as the Doctor:
-- Add the following at the start of your SQL to store it as a stored procedure:
-- Now change your script so that it alters the stored procedure to list out only those episodes featuring Matt Smith made in 2012, using this syntax in the WHERE clause.

-- CREATE PROC spMattSmithEpisodes AS
ALTER PROC spMattSmithEpisodes AS
SELECT
	tblEpisode.SeriesNumber,
	tblEpisode.EpisodeNumber,
	tblEpisode.Title,
	tblEpisode.EpisodeDate,
	tblDoctor.DoctorName
FROM
	tblEpisode
	INNER JOIN tblDoctor ON
		tblEpisode.DoctorId = tblDoctor.DoctorId
WHERE
	tblDoctor.DoctorName = 'Matt Smith'
	AND
	YEAR(TBLEPISODE.EpisodeDate) = 2012
