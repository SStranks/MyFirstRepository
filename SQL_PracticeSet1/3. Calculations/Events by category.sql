-- Create a query to list out for each event the category number that it belongs to:

--This is harder than it looks!  You'll need to use the + symbol to join the following bits of text together:

--The event name
--An opening parenthesis, followed by the word category
--The category number (but you'll need to cast this as a string of text)
--The closing parenthesis
--The syntax of the CAST function is:

--CAST ( Something AS DataType)

SELECT
	EventName + ' (category ' + CAST(CategoryID AS VARCHAR(10)) + ')' AS "Event (category)", EventDate
FROM
	tblEvent
WHERE
	CountryID = 1