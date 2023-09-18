# Dynamic-Web-App

SCENARIO: Increment the counter by one
GIVEN the tally counter app is open
AND the counter is at 0
WHEN I click the "Add" button
THEN the counter should display 1
 

SCENARIO: Decrement the counter by one
GIVEN the tally counter app is open
AND the counter is at 1
WHEN I click the "Subtract" button
THEN the counter should display 0
 

SCENARIO: Resetting the Tally Counter
GIVEN the tally counter app is open
AND the counter value is 10
WHEN I click on the "Reset" button
THEN the counter value should change to 0
AND a confirmation message should be displayed that the counter has been reset