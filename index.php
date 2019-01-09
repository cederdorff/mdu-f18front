<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Get started with HTML, CSS and JavaScript">
  <meta name="author" content="Rasmus Cederdorff">
  <title>eaaa.cederdorff.com</title>
  <style>
    * {
      line-height: 1.2;
      margin: 0;
    }

    html {
      color: #333;
      display: table;
      font-family: Helvetica, Arial, sans-serif;
      height: 100%;
      text-align: center;
      width: 100%;
      font-weight: 200;
    }

    h1 {
      font-size: 2em;
      font-weight: 300;
      letter-spacing: 3px;
      margin: 1em 0;
      text-transform: uppercase;
    }

    h3{
      font-weight: 300;
      letter-spacing: 3px;
      margin: 1em 0;
      text-transform: uppercase;
    }

    a{
      letter-spacing: 1px;
      text-decoration: none;
      color: rgb(38,76,89);
    }
    a:hover{
      opacity: 0.6;
    }
    p{
      margin: 0.25em 0;
    }
  </style>
</head>

<body>
  <header>
    <h1 id="title">eaaa.cederdorff.com</h1>
  </header>
  <h3>Projects</h3>
  <?php
  //Get a list of file paths in current directory.
  $fileList = glob('*');
  //Loop through the array that glob returned.
  foreach($fileList as $filename){
    if($filename !== "index.php"){
      echo '<p><a href='. $filename .'>'. $filename, '</a></p>';
    }
  }
  ?>
<script>
  let path = window.location.hostname + window.location.pathname;
  title.innerHTML = path;
  document.title = path;
</script>
</body>

</html>
