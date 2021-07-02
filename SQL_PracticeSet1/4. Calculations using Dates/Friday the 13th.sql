-- Create a query to show the day of the week and also the day number on which each event occurred:

--Use this to show:

--That mercifully there weren't any events on Friday the 13th;
--That there was one event on Thursday 12th (the day before); and
--That there were two events on Saturday the 14th (the day after).

SELECT
	EventName, EventDate, 
	DATENAME(weekday, EventDate) AS "Day of week",
	DAY(EventDate) AS "Day number"
FROM
	tblEvent
WHERE
	DateName(weekday, EventDate) = 'Friday' 
	AND
	day(EventDate) = 13