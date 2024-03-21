import { CourierAssignedDriverUpdateManyWithoutCouriersInput } from "./CourierAssignedDriverUpdateManyWithoutCouriersInput";
import { ShipmentUpdateManyWithoutCouriersInput } from "./ShipmentUpdateManyWithoutCouriersInput";

export type CourierUpdateInput = {
  billingAddress?: string | null;
  country?: string | null;
  courierAssignedDrivers?: CourierAssignedDriverUpdateManyWithoutCouriersInput;
  name?: string | null;
  shipments?: ShipmentUpdateManyWithoutCouriersInput;
};
