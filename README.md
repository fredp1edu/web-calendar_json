# web-calendar_json
This is just a branch of the ongoing web-calendar_php project. Since the original web app model did not incorporate json in any of its procedures, this branch will take one of the functions -- the calendar entry display -- as a AJAX call to request data from MySQL, delivered via PHP as a JSON object and then formatted with JQuery for screen output.
The changes will be seen in the assets/js/init.js and sys/class/class.calendar.inc.php files (sendJSON method).
Notes:
*   Authentication has been removed.
*   This is just to show how this app could be configured to work using JSON, all other enhancements to the web app will be continued in the web-calendar_php master. No further work will be done on this branch other than the JSON enhancement.
*   SPECIAL NOTE: THIS APP CURRENTLY HAS NO VALIDATION OF INPUTS -- So inputting invalid date information will simply crash the program right now. I will be adding validation (to the web-calendar_php master), but before doing that, I actually want to revamp the add/edit input forms to limit the types of input: i.e., add selection boxes for date, time and type inputs. 