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
import { AddressListRelationFilter } from "../../address/base/AddressListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BookingListRelationFilter } from "../../booking/base/BookingListRelationFilter";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class AttendeeWhereInput {
  @ApiProperty({
    required: false,
    type: () => AddressListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AddressListRelationFilter)
  @IsOptional()
  @Field(() => AddressListRelationFilter, {
    nullable: true,
  })
  addresses?: AddressListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BookingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BookingListRelationFilter)
  @IsOptional()
  @Field(() => BookingListRelationFilter, {
    nullable: true,
  })
  bookings?: BookingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  surnam?: StringNullableFilter;
}

export { AttendeeWhereInput as AttendeeWhereInput };
