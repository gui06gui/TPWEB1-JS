
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
  ctx.save();
  ctx.lineWidth = this.epaisseur;
  ctx.strokeStyle = this.couleur;
  ctx.beginPath();
  ctx.rect(this.x, this.y, this.w, this.h);
  ctx.stroke();
  ctx.restore();
};

Line.prototype.paint = function(ctx) {
  ctx.save();
  ctx.lineWidth = this.epaisseur;
  ctx.strokeStyle = this.couleur;
  ctx.beginPath();
  ctx.moveTo(this.x1, this.y1);
  ctx.lineTo(this.x2, this.y2);
  ctx.stroke();
  ctx.restore();
};

Drawing.prototype.paint = function(ctx, canvas) {
  console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};

function  updateShapeList(drawing) {
  let shapeList = document.getElementById("shapeList");
  shapeList.innerHTML = "";
  drawing.getForms().forEach(function (eltDuTableau, index) {
    let li = document.createElement("li");
    if (eltDuTableau instanceof Rectangle) {
      li.textContent = "Rectangle: x=" + eltDuTableau.x + ", y=" + eltDuTableau.y + ", w=" + eltDuTableau.w + ", h=" + eltDuTableau.h + ", epaisseur=" + eltDuTableau.epaisseur + ", couleur=" + eltDuTableau.couleur;
    } else if (eltDuTableau instanceof Line) {
      li.textContent = "Ligne: x1=" + eltDuTableau.x1 + ", y1=" + eltDuTableau.y1 + ", x2=" + eltDuTableau.x2 + ", y2=" + eltDuTableau.y2 + ", epaisseur=" + eltDuTableau.epaisseur + ", couleur=" + eltDuTableau.couleur;
    }
    
    let btn = document.createElement("button");
    btn.textContent = "Supprimer";
    btn.type = "button";
    btn.className = "btn btn-default";
    btn.innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
    
    btn.onclick = function() {
      drawing.formes.splice(index, 1);
      updateShapeList(drawing);
      drawing.paint(ctx, canvas);
    }
    
    li.appendChild(btn);
    shapeList.appendChild(li);


  });
  function clearShapes() {
    drawing.formes = [];
    updateShapeList(drawing);
    drawing.paint(ctx, canvas);
  }
  document.getElementById("clear").onclick = clearShapes;
}