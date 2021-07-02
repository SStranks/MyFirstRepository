--The aim of this exercise is to find this and that in the EventDetails column (in that order).

--You should find the CHARINDEX function useful.  Here's an example:
--CHARINDEX( 'Trump', 'Donald Trump', 1)

--This would return 8, since Trump begins in Donald Trump at the 8th character (starting from 1).

SELECT
	EventName, EventDate, CHARINDEX( 'this', EventDetails, 1) AS "thisPosition", CHARINDEX( 'that', EventDetails, 1) AS "thatPosition", 
	ABS(CHARINDEX( 'this', EventDetails, 1) - CHARINDEX( 'that', EventDetails, 1)) AS "Offset"
FROM
	tblEvent
WHERE
	CHARINDEX( 'that', EventDetails, 1) > CHARINDEX( 'this', EventDetails, 1)
	AND
	CHARINDEX( 'this', EventDetails, 1) > 0
	AND
	CHARINDEX( 'that', EventDetails, 1) > 0