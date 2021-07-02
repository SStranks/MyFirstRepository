--Write a query to list out all of the events from the tblEvent table in category number 11 (which corresponds to Love and Relationships, as it happens):

SELECT
	EventName, EventDate
FROM
	tblEvent
WHERE
	CategoryID = 11