--If you've reached this point, you're probably ready for a challenge.  See if you can write a query to list out all of the non-boring events:

SELECT
	EventName, 
	CASE
		WHEN 
			SUBSTRING(EventName, 1, 1) IN ('a', 'e', 'i', 'o', 'u') 
			AND
			SUBSTRING(EventName, LEN(EventName), 1) IN ('a', 'e', 'i', 'o', 'u') 
		THEN 'Begins and ends with a vowel'
		WHEN SUBSTRING(EventName, 1, 1) = SUBSTRING(EventName, LEN(EventName), 1) THEN 'Same letter'
	END AS "Verdict"
FROM
	tblEvent
WHERE
	CASE
		WHEN 
			SUBSTRING(EventName, 1, 1) IN ('a', 'e', 'i', 'o', 'u') 
			AND
			SUBSTRING(EventName, LEN(EventName), 1) IN ('a', 'e', 'i', 'o', 'u') 
		THEN 'Begins and ends with a vowel'
		WHEN SUBSTRING(EventName, 1, 1) = SUBSTRING(EventName, LEN(EventName), 1) THEN 'Same letter'
		ELSE 'Boring'
	END <> 'Boring'
ORDER BY
	EventDate
