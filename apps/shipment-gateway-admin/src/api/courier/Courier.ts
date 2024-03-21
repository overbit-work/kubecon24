import { CourierAssignedDriver } from "../courierAssignedDriver/CourierAssignedDriver";
import { Shipment } from "../shipment/Shipment";

export type Courier = {
  billingAddress: string | null;
  country: string | null;
  courierAssignedDrivers?: Array<CourierAssignedDriver>;
  createdAt: Date;
  id: string;
  name: string | null;
  shipments?: Array<Shipment>;
  updatedAt: Date;
};
