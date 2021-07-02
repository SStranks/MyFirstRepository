--The idea behind this exercise is to see what was happening in the world around the time when you were born (but you can use any reference date).  First create a query to show the number of days which have elapsed for any event since your birthday:

SELECT
	EventName, 
	FORMAT(EventDate, 'dd MMM yyyy') AS "Event date",
	DATEDIFF(day, EventDate, '19870904') AS "Days Offset",
	ABS(DATEDIFF(day, EventDate, '19870904')) AS "Days difference"
FROM
	tblEvent
ORDER BY
	"Days difference" ASC