import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ShipmentUpdateInput = {
  courier?: CourierWhereUniqueInput | null;
  deliveryAddressId?: string | null;
  orderItem?: InputJsonValue;
};
