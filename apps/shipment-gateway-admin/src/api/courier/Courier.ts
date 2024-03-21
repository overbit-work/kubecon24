import { Shipment } from "../shipment/Shipment";

export type Courier = {
  billingAddress: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  shipments?: Array<Shipment>;
  updatedAt: Date;
};
