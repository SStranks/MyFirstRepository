-- In this exercise you should create a stored procedure to calculate the difference in length between the longest and shortest EventName, then return this difference and show it in a message:

-- You can use the LEN function to find the length of each EventName, and MAX(LEN(EventName)) and MIN(LEN(EventName)) to find the longest and shortest names.

-- First create a stored procedure that:
--uses the MIN and MAX functions as above to work out the longest and shortest EventName;
-- takes one from the other and stores the answer in a variable; then
--uses RETURN to return the value of this variable.

ALTER PROC spHowMuchLonger AS
DECLARE @MaxEventName INT
DECLARE @MinEventName INT
DECLARE @DiffEventName INT
SELECT
	@MaxEventName = MAX(LEN(tblEvent.EventName))
FROM
	tblEvent
ORDER BY
	MAX(LEN(tblEvent.EventName))

SELECT
	@MinEventName = MIN(LEN(tblEvent.EventName))
FROM
	tblEvent
ORDER BY
	MIN(LEN(tblEvent.EventName))

SET @DiffEventName = @MaxEventName - @MinEventName
RETURN @DiffEventName

--Now DECLARE a new variable in the same window as your EXEC command. The script to put the RETURN value into the variable can be tricky.
DECLARE @Difference INT
EXEC @Difference = spHowMuchLonger
SELECT 'The difference between the longest event name and the shortest is: ' + CAST(@Difference AS varChar(5)) + ' characters' AS 'How much longer?'
