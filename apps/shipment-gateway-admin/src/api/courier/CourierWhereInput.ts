import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourierAssignedDriverListRelationFilter } from "../courierAssignedDriver/CourierAssignedDriverListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type CourierWhereInput = {
  billingAddress?: StringNullableFilter;
  country?: StringNullableFilter;
  courierAssignedDrivers?: CourierAssignedDriverListRelationFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  shipments?: ShipmentListRelationFilter;
  updatedAt?: DateTimeFilter;
};
