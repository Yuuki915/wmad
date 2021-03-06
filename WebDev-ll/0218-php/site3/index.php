<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="http://bootswatch.com/5/darkly/bootstrap.css">
    <title>Document</title>
    <script>

        function showSuggestion(str){
            if(str.length === 0){
                document.getElementById('output').innerHTML = "";
            } else {
                let xmlhttp = new XMLHttpRequest()
                xmlhttp.onreadystatechange = function(){
                    if(this.readyState === 4 && this.status === 200){
                    document.getElementById('output').innerHTML = this.responseText;
                    }
                }
                xmlhttp.open("GET", "suggestions.php?q="+str,true)
                xmlhttp.send()
            }
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Search User:</h1>

        <form>
        Search User: <input type="text" class="form-control" onkeyup="showSuggestion(this.value)" />
        </form>

        <p>
            Suggestions: <span id="output"></span>
        </p>
    </div>
</body>
</html>