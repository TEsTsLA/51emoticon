import { IsString, IsNotEmpty } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class ResourceDto{
    @IsString()
    @ApiModelProperty()
    @IsNotEmpty()
    name:string
}