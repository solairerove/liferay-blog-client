<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<portlet:defineObjects/>
<head>
    <script> var URL_PATH = "<%=request.getContextPath()%>"</script>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <title><%=request.getContextPath()%></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <script src="URL_PATH/node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="URL_PATH/node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="URL_PATH/node_modules/systemjs/dist/system.src.js"></script>

    <script src="URL_PATH/node_modules/rxjs/bundles/Rx.js"></script>
    <script src="URL_PATH/node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="URL_PATH/node_modules/angular2/bundles/http.dev.js"></script>
    <script src="URL_PATH/node_modules/angular2/bundles/router.dev.js"></script>

    <link href="URL_PATH/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="URL_PATH/public/style/clean-blog.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    <script>
        System.import('URL_PATH/app').catch(function (err) {
            console.error(err);
        });
    </script>
</head>

<body>

<my-app>Loading...</my-app>

<script src="URL_PATH/node_modules/jquery/dist/jquery.min.js"></script>

<script src="URL_PATH/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

<script src="URL_PATH/public/js/clean-blog.min.js"></script>
</body>