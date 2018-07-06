import { IsString } from "class-validator";

export class LayoutDto{
    @IsString()
    name:string
}