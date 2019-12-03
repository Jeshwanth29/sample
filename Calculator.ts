class Calculator{
	public num1:number;
	public num2:number;
	constructor(a:number,b:number){
		this.num1=a;
		this.num2=b;

	}
	public add():number{
		return(this.num1+this.num2);
	}

	public diff():number{
		return(this.num1-this.num2);
	}

	public pro():number{
		return(this.num1*this.num2);
	}

	public div():number{
		return(this.num1/this.num2);
	}
}

class Sci_cal extends Calculator{
	public x:number;
	public y:number;
	constructor(na1:number,na2:number){
		super(na1,na2);
		this.x=na1;
		this.y=na2;
	}

	public sinf(){
		return("first number="+Math.sin(this.x)+" the second number="+Math.sin(this.y));
	}

	public cosf(){
		return("first number="+Math.cos(this.x)+" the second number="+Math.cos(this.y));
	}
}

class S_Cal extends Sci_cal{
	public n1:number;
	public n2:number;
	constructor(j:number,k:number){
		super(j,k);
		this.n1=j;
		this.n2=k;
	}
	public power(){
		return(Math.pow(this.n1,this.n2));
	}

	public minimum(){
		return(Math.min(this.n1,this.n2));
	}

	public square(){
		return("first number="+Math.sqrt(this.n1)+" the second number="+Math.sqrt(this.n2));
	}
}

let c=new S_Cal(4,3);
console.log("the sum="+c.add());
console.log("the difference="+c.diff()); 
console.log("the product="+c.pro());
console.log("the quotient="+c.div());
console.log("the sin="+c.sinf());
console.log("the cosine="+c.cosf());
console.log("the power of the numbers are="+c.power());
console.log("the minimum of two numbers="+c.minimum());
console.log("the square root is="+c.square());

