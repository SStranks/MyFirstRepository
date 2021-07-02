SELECT        
	tblCountry.CountryName AS Country, 
	tblEvent.EventName AS [What happened], 
	tblEvent.EventDate AS [When happened]
FROM            
	tblCountry INNER JOIN
    tblEvent ON 
	tblCountry.CountryID = tblEvent.CountryID
ORDER BY 
	[When happened]