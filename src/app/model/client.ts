//clase pura JS
export class Client {
//atributos
    #nombre: string;
    #contrasenya: string;
    #contrasenya2: string;
    #cemail: string;
    #estcivil: string;
    #sexe: string;
    #reqinfo: string;
    #accept: string;

//constructor, 
    constructor(
        nombre: string,
        contrasenya: string,
        contrasenya2: string,
        cemail: string,
        estcivil: string,
        sexe: string,
        reqinfo: string,
        accept: string
    ) {
        this.#nombre = nombre;
        this.#contrasenya = contrasenya;
        this.#contrasenya2 = contrasenya2;
        this.#cemail = cemail;
        this.#estcivil = estcivil;
        this.#sexe = sexe;
        this.#reqinfo = reqinfo;
        this.#accept = accept;
    }

//gets
    get nombre():string {
        return this.#nombre;
    }
    get contrasenya():string {
        return this.#contrasenya;
    }
    get contrasenya2():string {
        return this.#contrasenya2;
    }
    get cemail():string | undefined {
        return this.#cemail;
    }
    get estcivil():string | undefined {
        return this.#estcivil;
    }
    get sexe():string | undefined {
        return this.#sexe;
    }
    get reqinfo():string | undefined {
        return this.#reqinfo;
    }
    get accept():string | undefined {
        return this.#accept;
    }
//sets
    set nombre(nombre:string) {
        this.#nombre = nombre;
    }
    set contrasenya(contrasenya:string) {
        this.#contrasenya = contrasenya;
    }
    set contrasenya2(contrasenya2:string) {
        this.#contrasenya = contrasenya2;
    }
    set cemail(cemail:string) {
        this.#cemail = cemail;
    }
    set estcivil(estcivil:string) {
        this.estcivil = estcivil;
    }
    set sexe(sexe:string) {
        this.sexe = sexe;
    }
    set reqinfo(reqinfo:string) {
        this.reqinfo = reqinfo;
    }
    set accept(accept:string) {
        this.accept = accept;
    }
}