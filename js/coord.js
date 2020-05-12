
/* //erster versuch einbinden?
let inner = document.querySelector(".inner");
let log = document.querySelector(".log");
function setCoords(e, type) {
  let idX = type + "X";
  let idY = type + "Y";
 
  document.getElementById(idX).innerText = e[idX];
  document.getElementById(idY).innerText = e[idY];
}
function update(e) {
  setCoords(e, "offset");
  setCoords(e, "client");
  setCoords(e, "page");
  setCoords(e, "screen");
}
inner.addEventListener("mouseenter", update, false);
inner.addEventListener("mousemove", update, false);
inner.addEventListener("mouseleave", update, false);
*/


//zweite sinnvolle einbidung?
  var breite =400;
  var hoehe =400;
 // var tiefe =400;

  var svgElement = d3.select('body').append('svg').attr({
    'width': 400,
    'height':400,
 //   'depth':400
  });

  var punkt = [{'x':60, 'y':60, 'r':10}];

    svgElement.selectAll('circle')
    svgElement.data([kreise[0]])
    svgElement.enter()
    svgElement.append('circle')
    svgElement.attr({
        'cx': function(d){return d.x;},
        'cy':function(d){return d.y;},
   // 'cz':function(d){return d.z;},
        'r':function(d){return d.r;},
        'fill':'red'
  });




