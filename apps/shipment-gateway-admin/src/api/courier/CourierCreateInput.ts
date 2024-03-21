import { CourierAssignedDriverCreateNestedManyWithoutCouriersInput } from "./CourierAssignedDriverCreateNestedManyWithoutCouriersInput";
import { ShipmentCreateNestedManyWithoutCouriersInput } from "./ShipmentCreateNestedManyWithoutCouriersInput";

export type CourierCreateInput = {
  billingAddress?: string | null;
  country?: string | null;
  courierAssignedDrivers?: CourierAssignedDriverCreateNestedManyWithoutCouriersInput;
  name?: string | null;
  shipments?: ShipmentCreateNestedManyWithoutCouriersInput;
};
