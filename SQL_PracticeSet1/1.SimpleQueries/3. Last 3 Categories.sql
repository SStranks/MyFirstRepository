--Create a query to list out the id number and name of the last 3 categories from the tblCategory table in alphabetical order:

SELECT TOP 3
	CategoryID, CategoryName
FROM 
	tblCategory
ORDER BY
	CategoryName DESC