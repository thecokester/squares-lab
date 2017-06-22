var i = -1
document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement('button');
    button.innerText = 'Press ME'
    document.body.appendChild(button)
    var container = document.createElement('div')
    document.body.appendChild(container)
    button.addEventListener("click", function () {
        var box = document.createElement('div');
        box.className = 'squares';
        i++;
        box.id = [i]
        box.addEventListener('mouseover', function () {
            box.innerText = box.id;
        });
        box.addEventListener('mouseout', function () {
            box.innerText = '';
        });
        box.addEventListener('click', function () {
            var backColor = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
             "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", 
             "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", 
             "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", 
             "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", 
             "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", 
             "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
              "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
               "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", 
               "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen",
                "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", 
                "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
                 "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue",
                  "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", 
                  "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff",
                   "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", 
                   "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey",
                    "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", 
                    "White", "WhiteSmoke", "Yellow", "YellowGreen"]
            var random = backColor[Math.floor(Math.random() * backColor.length)];
            
            box.style.backgroundColor = (random);
        })
        box.addEventListener('dblclick', function () {
            if (box.id % 2 !== 0 && box == container.firstChild) {
                alert('Element has gone EXTINCT!')
                
            }
            else if (box.id % 2 !== 0) {
                box.previousElementSibling.remove()
                
            }
            else if (box == container.lastChild) {
                alert('Element has gone EXTINCT!')
                
            }
            else if (box.id % 2 == 0) {
                box.nextElementSibling.remove()
                
            }
        })
        container.appendChild(box)
        var boxCount = document.querySelectorAll(container > box).length;
    });
});


// // var squares = document.getElementsByClassName('square');

// for(var i = 0; i < squares.length; i++) {
//     squares[i].addEventListener("click", changeColor);
// }

// function changeColor(event) {
//     this.style.backgroundColor = randomColor();
// }


// function randomColor() {
//     var randomRed = Math.floor(Math.random() * 255);
//     var randomGreen = Math.floor(Math.random() * 255);
//     var randomBlue = Math.floor(Math.random() * 255);
//     //creates the string that is the ‘random color’

//     var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

    // return randomColor;
// }
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

