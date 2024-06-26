/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CourierAssignedDriverCreateNestedManyWithoutCouriersInput } from "./CourierAssignedDriverCreateNestedManyWithoutCouriersInput";
import { Type } from "class-transformer";
import { ShipmentCreateNestedManyWithoutCouriersInput } from "./ShipmentCreateNestedManyWithoutCouriersInput";

@InputType()
class CourierCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  billingAddress?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: () => CourierAssignedDriverCreateNestedManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => CourierAssignedDriverCreateNestedManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => CourierAssignedDriverCreateNestedManyWithoutCouriersInput, {
    nullable: true,
  })
  courierAssignedDrivers?: CourierAssignedDriverCreateNestedManyWithoutCouriersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ShipmentCreateNestedManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => ShipmentCreateNestedManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => ShipmentCreateNestedManyWithoutCouriersInput, {
    nullable: true,
  })
  shipments?: ShipmentCreateNestedManyWithoutCouriersInput;
}

export { CourierCreateInput as CourierCreateInput };
