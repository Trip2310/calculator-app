

function display(val){
document.getElementById('result').value += val;
    return val}

function solve()
    // {display.value='';}
    {
        try{result.value=eval(result.value);
        }
        catch(error){
            result.value="err"
        }
    }


// let x = document.getElementById('result').value
// let y = eval(x);
// document.getElementById('result').value = y
// return y
// } 

function clearScreen(){
document.getElementById('result').value = ''
    };