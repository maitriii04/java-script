let clickButton=document.getElementById("button");
        clickButton.addEventListener("click", function Month(){
            let day=Number(document.getElementById("numberMonth").value);

            switch(day){
                case 0:
                alert("jan")
                break;
                case 1:
                alert("Feb")
                break;
                case 2:
                alert("March")
                break;
                case 3:
                alert("April")
                break;
                case 4:
                alert("May")
                break;
                case 5:
                alert("Jun")
                break;
                case 6:
                alert("july")
                break;
                case 1:
                alert("august")
                break;
                case 2:
                alert("Sep")
                break;
                case 3:
                alert("oct")
                break;
                case 4:
                alert("Nov")
                break;
                case 5:
                alert("Dec")
                break;
            }
        })

//<h3>Num:<input type="text" id="numberMonth"></h3>
//<button id="button">ok</button>
