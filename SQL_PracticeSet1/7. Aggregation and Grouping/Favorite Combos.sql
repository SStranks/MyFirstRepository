-- Write a query to list out for each author and doctor the number of episodes made, but restrict your output to show only the author/doctor combinations for which more than 5 episodes have been written.

SELECT
	tblAuthor.AuthorName,
	tblDoctor.DoctorName,
	COUNT(*) AS "Episodes"
FROM
	tblAuthor
	INNER JOIN tblEpisode ON
	tblAuthor.AuthorId = tblEpisode.AuthorId
	INNER JOIN tblDoctor ON
	tblDoctor.DoctorId = tblEpisode.DoctorId
GROUP BY
	tblAuthor.AuthorName,
	tblDoctor.DoctorName
HAVING
	COUNT(*) > 5
ORDER BY
	COUNT(*) DESC