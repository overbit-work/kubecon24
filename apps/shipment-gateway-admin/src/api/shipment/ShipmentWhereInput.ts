import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ShipmentWhereInput = {
  courier?: CourierWhereUniqueInput;
  createdAt?: DateTimeFilter;
  deliveryAddressId?: StringNullableFilter;
  id?: StringFilter;
  orderItem?: JsonFilter;
  updatedAt?: DateTimeFilter;
};
