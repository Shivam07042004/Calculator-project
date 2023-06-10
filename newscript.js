var display=document.getElementById("display");
var buttons=document.getElementsByClassName("buttons");

var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function()
    {
        var value=this.getAttribute('data-value');

        // AC is clicked
        if(value=='reset')
        {
            display.innerText=null;
        }
        // operator + - * / % is clicked
        else if(value=='+' || value=='-' || value=='*' || value=='/' || value=='%')
        {
            operator=value;
            operand1=parseFloat(display.innerText);
            display.innerText=null;
        }
        // operator = is clicked
        else if(value=='=')
        {
            if(operator!=null)
            {
                operand2=parseFloat(display.innerText);

                // print  result
                display.innerText=eval(operand1 + " " + operator + " " + operand2);
            }
            else  
            {
                display.innerText="Error";
            }
        }
        // operator +/- is clicked 
        else if(value=='sign')
        {
            display.innerText=parseFloat(display.innerText) * (-1);
        }
        else if(value=='.')
        {
            if(display.innerText.length!=0 && !display.innerText.includes('.'))
               display.innerText+=value;
        }
        else  
        {
            display.innerText+=value;
        }
    });
}