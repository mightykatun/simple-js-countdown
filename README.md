# JS Timer / Countdown
Counts down from a date to another.

Put the dates in in your html like so:
```html
<var id="start-date" style="display: none;">Month XX, YYYY hh:mm:ss</var>
<var id="end-date" style="display: none;">Month XX, YYYY hh:mm:ss</var>
<script src="/scripts/countdown.js"></script>
```

Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Countdown</title>
		<link rel="icon" type="image/x-icon" href="/images/icon.ico"/>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<meta name="viewport" content="width=device-width, initial-scale=0.8"/>
		<script src="https://code.jquery.com/jquery-latest.min.js"></script>
	</head>
	<style>
		body {
			text-align: center;
		}
	</style>
	<body>
		<div id="container" style="display: none;">
			<div id="head-template"></div>
			<script src="/templates/head.js"></script>
			<p id="timer_header"></p>
			<p id="timer"></p>
			<progress id="bar" max="100"></progress>
			<p id="cent"></p>
			<div id="foot-template"></div>
			<script src="/templates/foot.js"></script>
		</div>
		<var id="start-date" style="display: none;">June 14, 2025 08:00:00</var>
		<var id="end-date" style="display: none;">July 3, 2025 18:00:00</var>
	</body>
</html>
<script src="/scripts/countdown.js"></script>
```


