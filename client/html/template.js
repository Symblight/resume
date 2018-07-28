export default ({ markup, styles, reduxState }) => `<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset="utf-8">
    <meta name="description"Resume"> 
    <base href="/" />
    <title>Alexey Tkachenko</title>
    ${styles}
    <meta name="viewport" content="width=device-width initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Asap" rel="stylesheet">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
</head>
<body>
    <div id="root">${markup}</div>
    <script>
        window.REDUX_DATA = ${JSON.stringify(reduxState)}
    </script>
    <script src="app.bundle.js"></script>
</body>
</html>`;
