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
import { AttendeeWhereUniqueInput } from "../../attendee/base/AttendeeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttendeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttendeeWhereUniqueInput)
  @IsOptional()
  @Field(() => AttendeeWhereUniqueInput, {
    nullable: true,
  })
  attendee?: AttendeeWhereUniqueInput | null;
}

export { BookingCreateInput as BookingCreateInput };
