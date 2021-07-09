--Create a variable to hold a given doctor's number (choose between 9, 10, 11 and 12!):
--The aim of this exercise is to use the SQL PRINT statement to show the following information about the doctor you've chosen:

DECLARE @DoctorNumber int = 9
DECLARE @DoctorId int
DECLARE @DoctorName varchar(100)
DECLARE @NumberEpisodes int

SET @DoctorId =
(
	SELECT tblDoctor.DoctorId
	FROM tblDoctor
	WHERE tblDoctor.DoctorNumber = @DoctorNumber
)

SET @DoctorName =
(
	SELECT tblDoctor.DoctorName
	FROM tblDoctor
	WHERE tblDoctor.DoctorNumber = @DoctorNumber
)

SET @NumberEpisodes =
(
	SELECT COUNT(*)
	FROM tblEpisode
	WHERE tblEpisode.DoctorId = @DoctorId
)

DECLARE @firstLine varChar(100) = 'Results for Doctor Number ' + CAST(@DoctorNumber AS varChar(5))
PRINT @firstLine
PRINT REPLICATE('-', LEN(@firstLine))
PRINT ''
PRINT 'Doctor Name: ' + UPPER(@DoctorName)
PRINT ''
PRINT 'Episodes appeared in: ' + CAST(@NumberEpisodes AS varChar(5))
