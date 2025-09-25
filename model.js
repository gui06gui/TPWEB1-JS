// Classe Dessin : contient une liste de formes
function Drawing() {
  this.formes = [];
  this.addForme = function(Forme) {
    this.formes.push(Forme);
  }
  this.getForms = function() {
    return this.formes;
  }
}



// Classe Forme : classe mère
function Forme(epaisseur, couleur) {
  this.epaisseur = epaisseur;
  this.couleur = couleur;
}

// Classe Rectangle : hérite de Forme
function Rectangle(x, y, w, h, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}


// Classe Ligne : hérite de Forme
function Line(x1, y1, x2, y2, epaisseur, couleur) {
  Forme.call(this, epaisseur, couleur);
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}


0