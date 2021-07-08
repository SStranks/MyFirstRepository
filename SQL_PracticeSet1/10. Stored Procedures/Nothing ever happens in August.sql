-- The aim of this exercise is to create a stored procedure called uspAugustEvents which will show all events that occurred in the month of August:
-- Now add the following code at the top of your query:
CREATE PROC uspAugustEvents AS
SELECT
	tblEvent.EventID,
	tblEvent.EventName,
	tblEvent.EventDetails,
	tblEvent.EventDate
FROM
	tblEvent
WHERE
	MONTH(tblEvent.EventDate) = 8