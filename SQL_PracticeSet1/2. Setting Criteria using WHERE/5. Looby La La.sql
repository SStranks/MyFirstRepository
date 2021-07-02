--Create a query which lists out all of the tblEvent events which include the word Teletubbies:

--Now add an OR condition to your query so that it lists out all events whose:

--Name includes Teletubbies; or
--Name includes Pandy.
--This should give you two rows:

SELECT
	EventName, EventDetails, EventDate
FROM
	tblEvent
WHERE
	EventName LIKE '%teletubbies%'
	OR
	EventName LIKE '%Pandy%'