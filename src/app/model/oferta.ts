/** 
 * Modela una oferta
 
    {
    "id" : 1 ,
    "titulo" : "Buckinghamshire" ,
    "descripcion" : "forecast" ,
    "empresa" : "Developer Hong Kong Dollar synthesize" ,
    "salario" : 58479 ,
    "ciudad" : "Nepal Human array" ,
    "email" : "Madge_Mayert@hotmail.com"
    },
*/
export class Oferta{

    public id: number;

    public titulo: string;

    public descripcion: string;

    public empresa: string;

    public salario: number;

    public ciudad: string;

    public email: string;

    constructor(id: number, titulo: string, descripcion: string, empresa: string, salario: number, ciudad: string, email: string) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.salario = salario;
        this.ciudad = ciudad;
        this.email = email;
      }
}