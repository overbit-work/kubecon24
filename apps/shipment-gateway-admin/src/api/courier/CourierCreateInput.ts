import { ShipmentCreateNestedManyWithoutCouriersInput } from "./ShipmentCreateNestedManyWithoutCouriersInput";

export type CourierCreateInput = {
  billingAddress?: string | null;
  country?: string | null;
  name?: string | null;
  shipments?: ShipmentCreateNestedManyWithoutCouriersInput;
};
