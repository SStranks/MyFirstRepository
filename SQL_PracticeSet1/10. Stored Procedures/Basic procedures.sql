--Create a stored procedure called uspCountriesAsia to list out all the countries with ContinentId equal to 1, in alphabetical order:

--CREATE PROC uspCountriesAsia AS
--SELECT
--	tblCountry.CountryName
--FROM
--	tblCountry
--WHERE
--	tblCountry.ContinentID = 1
--ORDER BY
--	tblCountry.CountryName

--If you've got this working, modify the text of your query to create a different procedure called uspCountriesEurope which lists all the countries in continent id number 3, and check that this works.

CREATE PROC uspCountriesEurope AS
SELECT
	tblCountry.CountryName
FROM
	tblCountry
WHERE
	tblCountry.ContinentID = 3
ORDER BY
	tblCountry.CountryName

--Close down all your SQL Server Management Studio windows.  Find the procedure called uspCountriesAsia in Object Explorer, and choose to modify it.  Change the procedure so that it lists out the CountryId too:

