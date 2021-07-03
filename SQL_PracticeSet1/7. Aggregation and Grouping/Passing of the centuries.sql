SELECT
	CASE
		WHEN YEAR(tblEvent.EventDate) < 1800 THEN '18th century'
		WHEN YEAR(tblEvent.EventDate) < 1900 THEN '19th century'
		WHEN YEAR(tblEvent.EventDate) < 2000 THEN '20th century'
		ELSE '21st century'
	END AS "Century",
	COUNT(*) AS "Number of events"
FROM
	tblEvent
GROUP BY
	CUBE(	
		CASE
		WHEN YEAR(tblEvent.EventDate) < 1800 THEN '18th century'
		WHEN YEAR(tblEvent.EventDate) < 1900 THEN '19th century'
		WHEN YEAR(tblEvent.EventDate) < 2000 THEN '20th century'
		ELSE '21st century'
	END)
ORDER BY
	"Century"
