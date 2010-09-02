<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery Plugin Boilerplate</title>
<link rel="stylesheet" href="stylesheets/contact.css">
</head>

<body>

<div id="contact">
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" id="contactform">
        <fieldset>
            <legend>Send me a message, yo</legend>
            <img width="80" height="80" class="gravatar" />
            <ol>
                <li>
                    <label for="message">Your message</label>
                    <textarea id="message" name="message" required></textarea>
                </li>
                <li>
                    <label for="name">Your name</label>
                    <input id="name" name="name" type="text" placeholder="First and last name" required />
                </li>
                <li>
                    <label for="email">Your email</label>
                    <input id="email" name="email" type="email" placeholder="email@domain.com" required />
                </li>
            </ol>
        </fieldset>
        <fieldset>
        <legend>Your three favorite movies</legend>
            <ol>
                <li>
                    <label for="movie1">#1</label>
                    <input id="movie1" name="movie1" type="text" />
                </li>
                <li>
                    <label for="movie2">#2</label>
                    <input id="movie2" name="movie2" type="text" />
                </li>
                <li>
                    <label for="movie3">#3</label>
                    <input id="movie3" name="movie:" type="text" />
                </li>
            </ol>
        </fieldset>
        <fieldset>
            <ol>
                <li>
                    <?php 
                        require_once('recaptchalib.php');
                        $publickey = "6Lf-sbwSAAAAAIVzqMuCosuTFJgp1wYprFoiwQgr";
                        echo recaptcha_get_html($publickey);
                    ?>
                </li>
                <li>
                    <input type="submit" />
                </li>
            </ol>
        </fieldset>
    </form>
</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="scripts/jquery.md5.js"></script>
<script type="text/javascript" src="scripts/jquery.gravatar.js"></script>
<script type="text/javascript" src="scripts/jquery.contact.js"></script>

<script type="text/javascript">

(function($){

    $(document).ready(function() {
        $('#contact form').contact();
    });

})(jQuery);

</script>

</body>
</html>
