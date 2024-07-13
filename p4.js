
        let clickButton=document.getElementById("button");
        clickButton.addEventListener("click", function weekDay(){
            let day=Number(document.getElementById("numberDay").value);

            switch(day){
                case 0:
                alert("sunday")
                break;
                case 1:
                alert("monday")
                break;
                case 2:
                alert("Tuesday")
                break;
                case 3:
                alert("wednesday")
                break;
                case 4:
                alert("Thursday")
                break;
                case 5:
                alert("Friday")
                break;
                case 6:
                alert("saturday")
                break;
            }
        })
   
          //<h3>Num:<input type="text" id="numberDay"></h3>
          // <button id="button">ok</button>
