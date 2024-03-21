import { ShipmentUpdateManyWithoutCouriersInput } from "./ShipmentUpdateManyWithoutCouriersInput";

export type CourierUpdateInput = {
  billingAddress?: string | null;
  country?: string | null;
  name?: string | null;
  shipments?: ShipmentUpdateManyWithoutCouriersInput;
};
