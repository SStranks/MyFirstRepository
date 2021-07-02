--Create a query which lists out all of the events which took place in February 2005:

SELECT
	EventName, EventDate
FROM
	tblEvent
WHERE
	Year(EventDate) = 2005
	AND
	Month(EventDate) = 02