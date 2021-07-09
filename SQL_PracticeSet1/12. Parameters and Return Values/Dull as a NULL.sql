-- Create a stored procedure to list out the category name, event date and category id for each event:

--ALTER PROC spEventDullasNull(@CategoryName as varChar(50), @After as datetime, @CategoryId as int) AS
--SELECT
--	tblCategory.CategoryName,
--	tblEvent.EventDate,
--	tblCategory.CategoryID
--FROM
--	tblCategory
--	INNER JOIN tblEvent ON
--		tblCategory.CategoryID = tblEvent.CategoryID
--WHERE
--	tblCategory.CategoryName LIKE '%' + @CategoryName + '%'
--	AND
--	tblEvent.EventDate = MIN(@After)
--	AND
--	tblCategory.CategoryID = @CategoryId
--ORDER BY
--	tblEvent.EventDate

-- Now try adding default values to the parameters and you'll see that it's difficult: what should the default be for @CategoryID? Instead assign NULL as the default value for all 3 parameters:

ALTER PROC spEventDullasNull
	(@CategoryName as varChar(50) = NULL, 
	@After as datetime = NULL, 
	@CategoryId as int = NULL) AS
SELECT
	tblCategory.CategoryName,
	tblEvent.EventDate,
	tblCategory.CategoryID
FROM
	tblCategory
	INNER JOIN tblEvent ON
		tblCategory.CategoryID = tblEvent.CategoryID
WHERE
	(@CategoryName IS NULL OR CategoryName LIKE '%' + @CategoryName + '%')
	AND
	(@After IS NULL OR EventDate >= @After)
	AND
	(@CategoryID IS NULL OR tblCategory.CategoryID = @CategoryID)
ORDER BY
	tblEvent.EventDate

-- there should be 14 events since 1990 about death
EXEC spEventDullasNull @CategoryName='death', @After='19900101'
-- category 16 is "Royalty", which has 16 events
EXEC spEventDullasNull @CategoryId=16