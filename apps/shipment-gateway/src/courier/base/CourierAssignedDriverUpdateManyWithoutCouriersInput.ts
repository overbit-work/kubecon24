/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CourierAssignedDriverWhereUniqueInput } from "../../courierAssignedDriver/base/CourierAssignedDriverWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CourierAssignedDriverUpdateManyWithoutCouriersInput {
  @Field(() => [CourierAssignedDriverWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourierAssignedDriverWhereUniqueInput],
  })
  connect?: Array<CourierAssignedDriverWhereUniqueInput>;

  @Field(() => [CourierAssignedDriverWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourierAssignedDriverWhereUniqueInput],
  })
  disconnect?: Array<CourierAssignedDriverWhereUniqueInput>;

  @Field(() => [CourierAssignedDriverWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CourierAssignedDriverWhereUniqueInput],
  })
  set?: Array<CourierAssignedDriverWhereUniqueInput>;
}

export { CourierAssignedDriverUpdateManyWithoutCouriersInput as CourierAssignedDriverUpdateManyWithoutCouriersInput };
