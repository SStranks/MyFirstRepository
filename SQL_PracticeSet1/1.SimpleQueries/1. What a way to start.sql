-- list out all of the events in date order
SELECT 
	EventName, EventDate 
FROM 
	tblEvent
ORDER BY 
	EventDate DESC;