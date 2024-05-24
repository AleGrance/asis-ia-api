import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, minLength } from "class-validator";

export class ClientDto {
    // DEFINE VALIDATORS
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    nombre: string

    @IsString()
    @MinLength(4)
    documento: string

    @IsNumber()
    cod_asesor: number

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    corre: string

}