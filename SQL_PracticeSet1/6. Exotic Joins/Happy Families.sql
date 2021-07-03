--Each row in this table contains a column called ParentFamilyId, which tells you which parent family any family belongs to (the All categories family - number 25 - has no parent, and so sits at the top of the hierarchy).

--Create a query which links 3 tables using outer joins as follows:

--Table			Alias
--tblFamily		Family
--tblFamily		ParentFamily
--tblFamily		TopFamily

--Add calculated columns to your query so that it displays all 25 familes:

--If you display the families in FamilyName order, you should see something like this.

--You'll need to trap for nulls, for those occasions when a family doesn't have a parent.

SELECT
	Family.FamilyName,
	CASE	
		WHEN TopFamily.FamilyName is null THEN '' 
		ELSE TopFamily.FamilyName + ' > ' 
	END + 
	CASE	
		WHEN ParentFamily.FamilyName is null THEN '' 
		ELSE ParentFamily.FamilyName + ' > '
	END + 
	Family.FamilyName AS 'Family path'
FROM
	tblFamily AS "Family"
	LEFT OUTER JOIN 
		tblFamily AS "ParentFamily" ON
		Family.ParentFamilyId = ParentFamily.FamilyId
	LEFT JOIN 
		tblFamily AS "TopFamily" ON
		ParentFamily.ParentFamilyId = TopFamily.FamilyId
ORDER BY
	Family.FamilyName
