
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.xDebut= 0;
  this.yDebut= 0;
  this.xFin= 0;
  this.yFin= 0;
  var gragging = false;
  this.interactor = interactor;
  
// Developper les 3 fonctions gérant les événements
  this.pression= function (evt) {
    var mousePos = getMousePosition(canvas, evt);
    this.xDebut= mousePos.x;
    this.yDebut= mousePos.y;
     gragging = true;
    //console.log("xDebut: "+this.xDebut+" yDebut: "+this.yDebut);
    this.interactor.onInteractionStart(this);

  }.bind(this);

this.deplacement= function (evt) {
   if ((gragging==true)) {
     var mousePos = getMousePosition(canvas, evt);
     this.xFin= mousePos.x;
     this.yFin= mousePos.y;
     //console.log("xFin: "+this.xFin+" yFin: "+this.yFin);
     this.interactor.onInteractionUpdate(this);
   }
  
  }.bind(this);

  this.relachement= function (evt) {
    var mousePos = getMousePosition(canvas, evt);
    this.xFin= mousePos.x;
    this.yFin= mousePos.y;
     gragging = false;
    //console.log("xFin: "+this.xFin+" yFin: "+this.yFin);
    this.interactor.onInteractionEnd(this);
    
  }.bind(this);


	

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacement, false);
  canvas.addEventListener('mouseup', this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



