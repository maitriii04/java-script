
        function findlargest(){
            var num1=document.getElementById('num1').value;
            var num2=document.getElementById('num2').value;
            var num3=document.getElementById('num3').value;

            var min=Math.min(num1,num2,num3);
            var max=Math.max(num1,num2,num3);

            document.getElementById("result").innerHTML= "min:" + min + "max" + max;
        }
    //<h3>Num1:<input type="number" id="num1"></h3>
    //<h3>Num2:<input type="number" id="num2"></h3>
    //<h3>Num3:<input type="number" id="num3"></h3>
    //<button onclick="findlargest()">submit</button>
    //<p id="result"></p>
