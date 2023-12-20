const mainWindow = document.querySelector('#main-window');
let toggle = false;


function showHide(){
    
    if(toggle)
    {
        mainWindow.style.visibility = 'visible';
    }
    else{
        mainWindow.style.visibility = 'hidden'
    }

    toggle = !toggle;
}

showHide()

console.log(mainWindow);