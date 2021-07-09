--Create a stored procedure called spCalculateAge which:

--Declares an integer variable called @Age
--Sets the value of this variable to be the difference in years between your date of birth and today's date (see hint below)
--Prints out your age

ALTER PROC spCalculateAge AS
DECLARE @Age Int
SELECT 
	@Age = DateDiff(year, '03/04/1964', GetDate())
SELECT
	'You are ' + CAST(@Age AS varChar(10)) + ' years old.'