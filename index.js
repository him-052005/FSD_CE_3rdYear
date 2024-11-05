<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>GitHub Account </h1>
    <div id="parent">
        <button onclick="getData()">Search</button>
    </div>
    <script>
      function getData() {
        fetch("https://api.github.com/users")
          .then((response) => {
            const data = response.json();
            return data;
          })
          .then((response) => {
            const data = document.getElementById("parent");
            data.innerHTML = response[0].login;
          });
      }
    </script>
  </body>
</html>