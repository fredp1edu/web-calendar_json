# web-calendar_json
This is just a branch of the ongoing web-calendar_php project. Since the original web app model did not incorporate json in any of its procedures, this branch will take one of the functions -- the calendar entry display -- as a AJAX call to request data from MySQL, delivered via PHP as a JSON object and then formatted with JQuery for screen output.
The changes will be seen in files 'assets/js/init.js' and 'sys/class/class.calendar.inc.php' (the 'displayEventJSON 'method).
Notes:
*   Authentication has been removed.
*   This is just to show how this app could be configured to work using JSON, all other enhancements to the web app will be continued in the web-calendar_php master. No further work will be done on this branch other than the JSON enhancement.
*   Deploying it to go live was another slight challenge. My ISP doesn't use the latest ver of PHP by a few versions, so I had to backtrack some commands and reconfigure some coding. __autoload function does not work in this environment, so I have to just load the classes directly for now and figure out why later. 
*   The link is above. To prevent obnoxious web bots from having a field day with the input fields, the app is in a non-public folder for now. The text phrases to get in are below.
*   To get in: caltester - fpProj2017!
*   SPECIAL NOTE: THIS APP CURRENTLY HAS NO VALIDATION OF INPUTS -- So inputting invalid date information will simply crash the program right now. I will be adding validation (to the web-calendar_php master), but before doing that, I actually want to revamp the add/edit input forms to limit the types of input: i.e., add selection boxes for date, time and type inputs. I'm going to work on that sooner than later because input right now even for testing is cumbersome.
    *   Started some of the form formatting. For now the 'type' field won't update in the edit screen and will default back to 'Normal' and the reminder field really doesn't work at all right now (all POST values set to null).

* Just one favor:  please do not edit or delete the holiday entries (thanksgiving, vet's day, christmas, etc) for now. Holidays are special cases which won't be editable or deleteable in the updated version, but changing them here changes them in the new version (same db).


The continuation of this calendar project is at https://github.com/fredp1edu/web-calendar_php
