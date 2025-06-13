//Dark-Light Mode Setup
function toggleMode(){
    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(".mode");

    if (document.body.classList.contains("dark-mode"))
        //dark-mode button's styling
    {button.style.backgroundColor = "transparent";
    button.style.border = "2px solid white";
    button.style.color = "#a46fc2";
    button.style.boxShadow = "none";}
    else//default
    {button.style.backgroundColor = "";
        button.style.border = "";
        button.style.Color = "";
        button.style.boxShadow = "";}
    }

    //Calculator Logic
    let input = document.getElementById('cdisplay');
    let buttons = document.querySelectorAll('button');

    let string ="";
    let arr = Array.from(buttons);
    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            if(e.target.innerHTML == '='){
                string = eval(string);//eval is script's own calculator
                input.value = string;//every output will apear as a string - "78"= 78
            }

            else if (e.target.classList.contains('mode'))return; //rejects toggle button's activity on the cal-screen 

            else if (e.target.textContent === 'AC')//clears the entire cal-screen
            {
                string = "";
                input.value = string;
            }
            

            else {
                string += e.target.innerHTML;
                input.value = string;
            }
        })
    })