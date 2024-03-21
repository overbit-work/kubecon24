import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type CourierWhereInput = {
  billingAddress?: StringNullableFilter;
  country?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  shipments?: ShipmentListRelationFilter;
  updatedAt?: DateTimeFilter;
};
