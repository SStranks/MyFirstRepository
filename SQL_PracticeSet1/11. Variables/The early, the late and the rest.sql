-- The aim of this exercise is to summarise events using the MIN, MAX and COUNT functions:

-- Now use a single SELECT clause to set the value for all of these variables (alternatively you could use a series of subqueries).

-- Write another SELECT clause to show the value of the variables, to show the summary output shown above.

DECLARE @EarliestDate date
DECLARE @LatestDate date
DECLARE @NumberOfEvents int
DECLARE @EventInfo varchar(50) = 'Summary of Events'

SELECT
	@EventInfo = 'Summary of Events',
	@EarliestDate = MIN(tblEvent.EventDate),
	@LatestDate = MAX(tblEvent.EventDate),
	@NumberOfEvents = COUNT(*)
FROM
	tblEvent

SELECT
	@EventInfo AS 'Title',
	CONVERT(varChar(10), @EarliestDate, 103) AS 'Earliest Date',
	CONVERT(varChar(10), @LatestDate, 103) AS 'Latest Date',
	@NumberOfEvents AS 'Number of Events'
