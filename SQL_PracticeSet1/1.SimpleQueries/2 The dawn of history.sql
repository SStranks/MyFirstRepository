--Write a query to show the first 5 events (in date order) from the tblEvent table:
--There are a few things to notice about this:

--You should give the columns aliases (What and Details in this case);
--Use SELECT TOP 5 to limit the results to 5 rows;
--Even though you're sorting by the event date, it doesn't have to be included in your results.

SELECT TOP 5
	EventName as "What", EventDetails as "Details"
FROM
	tblEvent
ORDER BY
	EventDate ASC
