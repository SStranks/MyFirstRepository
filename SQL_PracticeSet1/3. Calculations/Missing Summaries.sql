-- The tblContinent table lists out the world's continents, but there are gaps:

-- Add up to 3 columns to show a message where a summary is missing:

--Here's what your 3 columns should use:

--Column			How to get it
--Using ISNULL		Use the IsNull function to substitute the words No summary for rows where the Summary column is null.
--Using COALESCE	Do the same thing, but using the COALESCE function instead.
--Using CASE		Use a CASE WHEN statement to show different things according to whether the Summary column is null or not.

SELECT
	ContinentID, ContinentName, Summary, 
	ISNULL(NULL, 'No summary') AS "Using ISNULL", 
	COALESCE(Summary, 'No summary') AS "Using COALESCE", 
	CASE
		WHEN Summary IS NULL THEN 'No Summary'
		ELSE Summary
	END  AS "Using CASE"
FROM
	tblContinent
