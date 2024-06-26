/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Attendee } from "../../attendee/base/Attendee";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Promotion } from "../../promotion/base/Promotion";

@ObjectType()
class Booking {
  @ApiProperty({
    required: false,
    type: () => Attendee,
  })
  @ValidateNested()
  @Type(() => Attendee)
  @IsOptional()
  attendee?: Attendee | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Promotion,
  })
  @ValidateNested()
  @Type(() => Promotion)
  @IsOptional()
  promotions?: Promotion | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Booking as Booking };
