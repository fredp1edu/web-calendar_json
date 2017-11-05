<?php
session_start();

if (!isset($_SESSION['token']))
    $_SESSION['token'] = sha1(uniqid(mt_rand(), TRUE));

require_once 'sys/config/db_cred.inc.php';
require_once 'sys/class/class.db_connect.inc.php';
require_once 'sys/class/class.calendar.inc.php';
require_once 'sys/class/class.event.inc.php';

foreach ($C as $name => $val) {
    define($name, $val);
}
$dbo = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

/*function __autoload($class) {                             this function doesn't work in a live environment. Must check on that.
    $filename = "sys/class/class." . $class . ".inc.php";
    if (file_exists($filename)) {
        include_once $filename;
    } 
} */
?>