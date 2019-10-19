<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Discount Bot') }}</title>

    <!-- Libs CSS -->
    <link href="{{ mix('css/libs.css', 'assets') }}" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="{{ mix('css/theme.css', 'assets') }}" rel="stylesheet">

</head>
<body>
    <div id="app"></div>
    <!-- Scripts -->
    <script src="{{ mix('js/app.js', 'assets') }}" defer></script>
</body>
</html>
