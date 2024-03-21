import { Courier } from "../courier/Courier";
import { JsonValue } from "type-fest";

export type Shipment = {
  courier?: Courier | null;
  createdAt: Date;
  deliveryAddressId: string | null;
  id: string;
  orderItem: JsonValue;
  updatedAt: Date;
};
