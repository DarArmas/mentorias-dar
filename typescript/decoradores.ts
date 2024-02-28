//Interface
interface CamisetaBase{
	//estos son los metodos que TIENEN QUE EXISTIR 
	setColor(color);
	getColor();
};

//Decorador: me permite añadir una funcionalidad a una Clase
function estampar(logo: string){
	return function(target: Function){
		// a mi funcion target le va añadir la funcion estampacion
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de " + logo);
		}
	}
}

//añadir Decorador
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string; 
	private precio: number;

	//RECUERDA: constructor nunca devuelve ningun dato
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}


	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}
}


//Clase hija
class Sudadera extends Camiseta{

	private capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{
		return this.capucha;
	}
}



/*
var camiseta = new Camiseta();
camiseta.setColor("Rojito sisis");

var playera = new Camiseta();
playera.setColor("Azulito");
*/

//Instancias objeto con constructor
var camiseta  = new Camiseta("rojo", "manga larga", "nike", "1", 150);
camiseta.estampacion();

//incluso se hereda el constructor
var sudadera_nike = new Sudadera("amarilla", "manga larga", "adidas", "4", 250);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("naranjita");
; 

console.log(camiseta, sudadera_nike);