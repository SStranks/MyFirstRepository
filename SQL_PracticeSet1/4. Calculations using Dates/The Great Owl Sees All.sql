--First create a query showing events which took place in your year of birth, neatly formatted.

--Amend your query so that it shows the event date neatly formatted:

--Once using the FORMAT function; and
--Once using the CONVERT function.

SELECT
	EventName, EventDate AS "NotFormatted",
	FORMAT(EventDate, 'dd/MM/yyyy','en-US') AS "UsingFormat",
	CONVERT(char(10), EventDate, 3) AS "UsingConvert"
FROM
	tblEvent
WHERE
	YEAR(EventDate) = 1987