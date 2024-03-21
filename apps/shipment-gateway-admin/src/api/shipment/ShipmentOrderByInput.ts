import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  courierId?: SortOrder;
  createdAt?: SortOrder;
  deliveryAddressId?: SortOrder;
  id?: SortOrder;
  orderItem?: SortOrder;
  updatedAt?: SortOrder;
};
