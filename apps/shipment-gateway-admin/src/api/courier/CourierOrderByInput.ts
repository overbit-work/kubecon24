import { SortOrder } from "../../util/SortOrder";

export type CourierOrderByInput = {
  billingAddress?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
