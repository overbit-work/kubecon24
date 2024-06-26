/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierAssignedDriverWhereInput } from "./CourierAssignedDriverWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CourierAssignedDriverOrderByInput } from "./CourierAssignedDriverOrderByInput";

@ArgsType()
class CourierAssignedDriverFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CourierAssignedDriverWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CourierAssignedDriverWhereInput, { nullable: true })
  @Type(() => CourierAssignedDriverWhereInput)
  where?: CourierAssignedDriverWhereInput;

  @ApiProperty({
    required: false,
    type: [CourierAssignedDriverOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CourierAssignedDriverOrderByInput], { nullable: true })
  @Type(() => CourierAssignedDriverOrderByInput)
  orderBy?: Array<CourierAssignedDriverOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CourierAssignedDriverFindManyArgs as CourierAssignedDriverFindManyArgs };
