var number = document.getElementById('number'),
    square = document.getElementById('square'),
    triangle = document.getElementById('triangle'),
    circle = document.getElementById('circle');
    var num = parseInt(number.value);

square.onclick = function() 
{
  for (var i = 0; i < num; i++) 
  {
    var elem = document.createElement('div');
    elem.addEventListener('dblclick', deleteElem);
    elem.className = "square";
    var size = randSize();
    elem.style.width = size + 'px';
    elem.style.height = size + 'px';
    elem.style.top = randTop() + 'px';
    elem.style.left = randLeft() + 'px';
    document.body.append(elem);
  }
}

triangle.onclick = function() 
{
  for (var i = 0; i < num; i++) 
  {
    var elem = document.createElement('div');
    elem.addEventListener('mouseout', blurTriangle);
    elem.addEventListener('dblclick', deleteElem);
    elem.className = "triangle";
    var size = randSize();
    elem.style.borderLeft = size + 'px solid transparent';
    elem.style.borderRight = size + 'px solid transparent';
    elem.style.borderBottom = size*2 + 'px solid blue';
    elem.style.top = randTop() + 'px';
    elem.style.left = randLeft() + 'px';
    document.body.append(elem);
  }
}

circle.onclick = function() 
{
  for (var i = 0; i < num; i++) 
  {
    var elem = document.createElement('div');
    elem.addEventListener('mouseout', blurCircle);
    elem.addEventListener('dblclick', deleteElem);
    elem.className = "circle";
    var size = randSize();
    elem.style.width = size + 'px';
    elem.style.height = size + 'px';
    elem.style.top = randTop() + 'px';
    elem.style.left = randLeft() + 'px';
    document.body.append(elem);
  }
}

function randSize()
{
  return Math.floor(Math.random() * (500)) + 1;
}

function randTop()
{
  return Math.floor(Math.random() * (700)) + 54;
}

function randLeft()
{
  return Math.floor(Math.random() * (1200));
}

function deleteElem()
{
  document.body.removeChild(this)
}

function blurSquare()
{
  this.style.backgroundColor = "red";
}

function blurCircle()
{
  this.style.backgroundColor = "green";
}

function blurTriangle()
{
  this.style.borderBottomColor = "rgb(26, 26, 255)";
}