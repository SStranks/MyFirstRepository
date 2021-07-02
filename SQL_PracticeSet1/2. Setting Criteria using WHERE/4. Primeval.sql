--Events which aren't in the Transport category (number 14), but which nevertheless include the text Train in the EventDetails column.				4 rows

SELECT 
	EventName, EventDetails, EventDate
FROM
	tblEvent
WHERE
	CategoryID != 14
	AND
	EventDetails LIKE '%Train%'

--Events which are in the Space country (number 13), but which don't mention Space in either the event name or the event details columns.				6 rows

SELECT
	EventName, EventDetails, EventDate
FROM
	tblEvent
WHERE
	CountryID = 13
	AND
	(EventName NOT LIKE '%Space%' AND EventDetails NOT LIKE '%Space%')

--Events which are in categories 5 or 6 (War/conflict and Death/disaster), but which don't mention either War or Death in the EventDetails column.	91 rows

SELECT
	EventName, EventDetails, EventDate
FROM
	tblEvent
WHERE
	CategoryID IN (5, 6)
	AND
	EventDetails NOT LIKE '%War%'
	AND
	EventDetails NOT LIKE '%Death%'