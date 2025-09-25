
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = "#000000ff";
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').onclick = function () {
		this.currEditingMode = editingMode.rect;
	}.bind(this);
	document.getElementById('butLine').onclick = function () {
		this.currEditingMode = editingMode.line;
	}.bind(this);
	document.getElementById('colour').addEventListener('input', (event) => {
		this.currColour = event.target.value;
	});

	document.getElementById('spinnerWidth').addEventListener('input', (event) => {
		this.currLineWidth = event.target.value;
	});
	



	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (DnD) {
		//this.currentShape = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');

		console.log("test entre");
	}.bind(this);

	this.onInteractionUpdate = function (DnD) {
		if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle(DnD.xDebut, DnD.yDebut, DnD.xFin - DnD.xDebut, DnD.yFin - DnD.yDebut, this.currLineWidth, this.currColour);
		} else if (this.currEditingMode == editingMode.line) {
			this.currentShape = new Line(DnD.xDebut, DnD.yDebut, DnD.xFin, DnD.yFin, this.currLineWidth, this.currColour);
		}
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
		updateShapeList(drawing);
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		drawing.addForme(this.currentShape);
		drawing.paint(ctx, canvas);
		updateShapeList(drawing);

	}.bind(this);

};


