import { Type } from "class-transformer";
import { PageStateDto } from "./page-state.dto";
import { ValidateNested, IsNotEmpty, MaxLength } from "class-validator";

export class RequestDto {
    @ValidateNested()
    @IsNotEmpty()
    @Type(() => PageStateDto) 
    pageState: PageStateDto

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PageStateDto) 
    pArr:PageStateDto[]
}