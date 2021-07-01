--Create a query which uses two separate SELECT statements to show the first and last 2 events in date order from the tblEvent table:

SELECT TOP 2
	EventName AS "What", EventDate AS "When"
FROM
	tblEvent
ORDER BY
	EventDate ASC

SELECT TOP 2
	EventName AS "What", EventDate AS "When"
FROM
	tblEvent
ORDER BY
	EventDate DESC