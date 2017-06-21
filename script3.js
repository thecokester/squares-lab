document.addEventListener("DOMContentLoaded", function() {
    var btn = document.createElement("BUTTON");
    var t =document.createTextNode("CLICK ME");
    var counter =0 
    btn.appendChild(t);
    document.body.appendChild(btn);
    btn.style.border='3px solid black';
    btn.style.backgroundcolor='red';

    btn.addEventListener('click',function() {
        var box = document.createElement('div');
        box.id = (counter++);
        box.className = 'divBox';
        box.style.width = '155px';
        box.style.height = '155px';
        box.style.backgroundColor = 'black';
        box.style.marginBottom = '1em'
        document.body.appendChild(box);

        box.addEventListener('click', function(){
            box.style.backgroundColor = randomColor();
        });

        box.addEventListener('dblclick', function(){
            var before = box.previousSibling;
            var after = box.nextSibling;
            if (box.id % 2 === 0){
                after.remove();
            } else if (box.id % 2 !== 0) 
                before.remove();
            
              
             

});
        box.addEventListener("mouseover", function(){
            box.innerText = (box.id);
        });

        box.addEventListener("mouseleave", function(){
            box.innerText = "";
        });
    });

});

var squares = document.getElementsByClassName('square');

for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", changeColor);
}

function changeColor(event) {
    this.style.backgroundColor = randomColor();
}


function randomColor() {
    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    //creates the string that is the ‘random color’

    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

    return randomColor;
}
// <!-- 
//                   ,--.    ,--.
//                  ((O ))--((O ))
//                ,'_`--'____`--'_`.
//               _:  ____________  :_
//              | | ||::::::::::|| | |
//              | | ||::::::::::|| | |
//              | | ||::::::::::|| | |
//              |_| |/__________\| |_|
//                |________________|
//             __..-'            `-..__
//          .-| : .----------------. : |-.
//        ,\ || | |\______________/| | || /.
//       /`.\:| | ||  __  __  __  || | |;/,'\
//      :`-._\;.| || '--''--''--' || |,:/_.-':
//      |    :  | || .----------. || |  :    |
//      |    |  | || '----MCC---' || |  |    |
//      |    |  | ||   _   _   _  || |  |    |
//      :,--.;  | ||  (_) (_) (_) || |  :,--.;
//      (`-'|)  | ||______________|| |  (|`-')
//       `--'   | |/______________\| |   `--'
//              |____________________|
//               `.________________,'
//                (_______)(_______)
//                (_______)(_______)
//                (_______)(_______)
//                (_______)(_______)
//               |        ||        |
//               '--------''--------'
// -->Hello MOTO!

