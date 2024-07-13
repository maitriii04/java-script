
        function addition(){
            var x=document.getElementById('num1').value;
            var y=document.getElementById('num2').value;

            var sum= (x*1)+(y*1);
            alert(sum);
        }
        function multiplication(){
            var x=document.getElementById('num1').value;
            var y=document.getElementById('num2').value;

            var mul=(x*y);
            alert(mul);
        }
        function subtraction(){
            var x=document.getElementById('num1').value;
            var y=document.getElementById('num2').value;

            var sub=(x-y);
            alert(sub);
        }
        function Divide(){
            var x=document.getElementById('num1').value;
            var y=document.getElementById('num2').value;

            var div=(x/y);
            alert(div);
        }
   //<h1>calculator</h1>
   //<h3>Num1:<input type="number" id="num1"></h3>
   //<h3>Num2:<input type="number" id="num2"></h3>

  //<button name="add" onclick="addition()">+</button>
  //<button name="multiply" onclick="multiplication()">*</button>
  //<button name="subtract" onclick="substraction()">-</button>
  //<button name="divide" onclick="Divide()">/</button>
