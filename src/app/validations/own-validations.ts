import { AbstractControl, ValidationErrors } from "@angular/forms";

export class OwnValidations {
    #contrasenya:string="";

    public setContrasenya(contrasenya:string) {
        this.#contrasenya = contrasenya;
    }
    public getContrasenya():string {
        return this.#contrasenya;
    }

    static soloLetras(control:AbstractControl):ValidationErrors | null {
        let campo:string=control.value;
        let regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
        if (regex.test(campo)) {
            return null;
        } else {
            //OnlyLeters es el identificador de html
            return {onlyLeters: true}
        }
    }
    static soloNumerosYLetras(control:AbstractControl):ValidationErrors | null {
        let campo:string=control.value;
        let regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]+$/;
        if (regex.test(campo)) {
            return null;
        } else {
            //OnlyLeters es el identificador de html
            return {onlyLeters: true}
        }
    }
    static password(control:AbstractControl):ValidationErrors | null {
        let contrasenya:string=control.value;
        let regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/;
        if (regex.test(contrasenya)) {
            let password = new OwnValidations();
            password.setContrasenya(contrasenya);
            return null;
        } else {
            return {password: true}
        }
    }
    static password2(control:AbstractControl):ValidationErrors | null {
        let contrasenya:string=control.value;
        let regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/;
        // let password2 = new OwnValidations();
        // if (regex.test(contrasenya) && (contrasenya == password2.getContrasenya())) {
        //     return null;
        // } else {
        //     return {password2: true}
        // }
        if (regex.test(contrasenya)) {
            return null;
        } else {
            return {password2: true}
        }
    }

}
