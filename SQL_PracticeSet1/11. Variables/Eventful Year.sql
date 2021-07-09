-- Write a SQL statement which brings back the top 3 events in your year of birth, in event name order. You will need to use the YEAR function in the WHERE clause to do this, together with SELECT TOP 3 and an ORDER BY clause:

SELECT TOP 3
	tblEvent.EventName,
	tblEvent.EventDate
FROM
	tblEvent
WHERE
	YEAR(tblEvent.EventDate) = 1985
ORDER BY
	tblEvent.EventDate

-- Running the SELECT statement will generate a number of rows, but variables can only hold one.  What we'd really like to do is to join the events into a single string variable:

--To do this, first create a VARCHAR variable (called @EventsInYear, say) to hold the event names.
--Now amend your SQL statement so that it sets this variable to hold the concatenated event names.  The syntax for getting this list to build can be tricky. Instead of simply putting variable = value, you need to set the variable equal to itself plus the value:

DECLARE @EventsInYear varChar(200) = ''
SELECT TOP 3
	@EventsInYear = @EventsInYear + tblEvent.EventName + ', '
FROM
	tblEvent
WHERE
	YEAR(tblEvent.EventDate) = 1985
ORDER BY
	tblEvent.EventDate

IF LEN(@EventsInYear) = 0 
	SELECT 'No events in year'
ELSE
	BEGIN
		SET @EventsInYear = LEFT(@EventsInYear,LEN(@EventsInYear)-1)
		SELECT @EventsInYear AS 'Eventful year'
	END