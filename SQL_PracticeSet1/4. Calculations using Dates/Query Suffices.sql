--Create a query to show the full dates for any event:

SELECT
	EventName,
	DATENAME(weekday, EventDate)
	+ ' ' +
	DATENAME(day, EventDate)
	+
	CASE
		WHEN DATENAME(day, EventDate) IN (1, 21, 31) THEN 'st'
		WHEN DATENAME(day, EventDate) IN (2, 22) THEN 'nd'
		WHEN DATENAME(day, EventDate) IN (3, 23) THEN 'rd'
		ELSE 'th'
	END
	+ ' ' +
	DATENAME(month, EventDate)
	+ ' ' +
	DATENAME(year, EventDate)
	AS "Full date"
FROM
	tblEvent
ORDER BY
	EventDate