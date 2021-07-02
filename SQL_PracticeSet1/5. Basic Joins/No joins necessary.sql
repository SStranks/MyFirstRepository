SELECT
	tblAuthor.AuthorName, 
	tblEpisode.Title, 
	tblEpisode.EpisodeType
FROM            
	tblAuthor INNER JOIN 
	tblEpisode ON 
	tblAuthor.AuthorId = tblEpisode.AuthorId
WHERE
	EpisodeType LIKE '%special%'
ORDER BY
	tblEpisode.Title