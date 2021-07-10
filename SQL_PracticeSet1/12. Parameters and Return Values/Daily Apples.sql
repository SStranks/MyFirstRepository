--Create a procedure called spCompanionsForDoctor which will list out all of the companions for a given doctor (or all of the companions in the database if you leave the doctor's name parameter out).  You'll need to link the following tables:

--tblCompanion to tblEpisodeCompanion, using the CompanionId column;  tblEpisodeCompanion to tblEpisode, using the EpisodeId column; and
--tblEpisode to tblDoctor, using the DoctorId column.
--To test your procedure out, see if you get 3, 5 and 17 companions' names respectively when you run these tests: 

CREATE PROC spCompanionsForDoctor(@DoctorName varChar(100) = NULL) AS
--DECLARE @DoctorName varChar(100) = NULL
SELECT
	tblCompanion.CompanionName
FROM
	tblCompanion
	INNER JOIN tblEpisodeCompanion ON
		tblCompanion.CompanionId = tblEpisodeCompanion.CompanionId
	INNER JOIN tblEpisode ON
		tblEpisode.EpisodeId = tblEpisodeCompanion.EpisodeId
	INNER JOIN tblDoctor ON
		tblEpisode.DoctorId = tblDoctor.DoctorId
WHERE
	(@DoctorName IS NULL OR tblDoctor.DoctorName LIKE '%' + @DoctorName + '%')
GROUP BY
	tblCompanion.CompanionName


-- show the 3 companions for Christopher Eccleston
spCompanionsForDoctor 'Ecc'
GO

-- show the 5 companions for Matt Smith
spCompanionsForDoctor 'matt'
GO

-- show the 17 companions for any doctor
spCompanionsForDoctor
GO