import { Type } from "class-transformer";
import { PageStateDto } from "./page-state.dto";
import { ValidateNested, IsNotEmpty, MaxLength } from "class-validator";
import { ApiModelProperty } from '@nestjs/swagger';
export class RequestDto {
    @ApiModelProperty()
    @ValidateNested()
    @IsNotEmpty()
    @Type(() => PageStateDto) 
    pageState: PageStateDto
    
    @ApiModelProperty({
        isArray:true,
        type:PageStateDto,
        required:false
    })
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => PageStateDto) 
    pArr:PageStateDto[]
}