-- Create a join to list out all of the doctors who appeared in episodes made in 2010. 

SELECT
	tblDoctor.DoctorName,
	tblEpisode.Title
FROM
	tblDoctor INNER JOIN 
	tblEpisode ON
	tblDoctor.DoctorId = tblEpisode.DoctorId
WHERE
	YEAR(tblEpisode.EpisodeDate) = 2010
