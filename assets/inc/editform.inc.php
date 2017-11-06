<?php 
return <<<FORM_MARKUP
<form action="assets/inc/process.inc.php" method="POST">
<fieldset>
<legend>$submit</legend>
<label for "event_title">Event Title:</label>
    <input type="text" name="event_title" id="event_title" value="$event->title" required />
<label for "event_type">Type:</label>
    <select name="event_type" id="event_type">
        <option value="0">Normal</option>
        <option value="1">Urgent</option>
        <option value="2">Business</option>
        <option value="3">Leisure</option>
        <option value="4">Birthday</option>
    </select>
<label for "event_start">Start Time:</label>
    <input type="text" name="event_start" id="event_start" placeholder="YYYY-MM-DD hh:mm:ss" value="$event->start" />
<label for "event_end">End Time:</label>
    <input type="text" name="event_end" id="event_end" placeholder="YYYY-MM-DD hh:mm:ss" value="$event->end" />
 <label for "event_loc">Location:</label>
    <input type="text" name="event_loc" id="event_loc" value="$event->loc" />
<label for "event_desc">Description:</label>
    <textarea name="event_desc" id="event_desc"/>$event->desc</textarea>
<label for "event_rem">Reminder:</label>
    <select name="event_rem" id="event_rem">
        <option value="">No reminder</option>
        <option value="">15 min</option>
        <option value="">30 min</option>
        <option value="">1 hour</option>
        <option value="">3 hours</option>
        <option value="">12 hours</option>
        <option value="">1 day</option>
    </select>
<input type="hidden" name="event_id" value="$event->id" />
<input type="hidden" name="token" value="$_SESSION[token]" />
<input type="hidden" name="action" value="event_edit" />
<button type="submit" id="btnEdit">$submit</button> or <a href="./">cancel</a>
</fieldset>
</form>
FORM_MARKUP;
?>