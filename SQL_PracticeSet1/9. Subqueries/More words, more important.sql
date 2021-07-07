-- Write a sub query to filter events to show only those which have an event name of longer than average length. 
-- You can run your subquery separately by highlighting it to show that the average EventName length is 26 characters:

SELECT TOP 5
	tblEvent.EventName
FROM 
	tblEvent
WHERE
	LEN(tblEvent.EventName) > 
		(
			SELECT AVG(LEN(tblEvent.EventName))
			FROM tblEvent
		)