-- The aim of this exercise is to use variables to present some information about yourself as a little sentence:

DECLARE @myName varChar(6) = 'Simon'
DECLARE @birthDate datetime
DECLARE @petCount int

SET @birthDate = '1985-03-27'
SELECT @petCount = 9

SELECT
	'My name is ' + @myName + ', I was born on ' + CONVERT(varChar(50), @birthDate, 103) + ' and I have ' + CAST(@petCount AS varchar(10)) + ' pets.'