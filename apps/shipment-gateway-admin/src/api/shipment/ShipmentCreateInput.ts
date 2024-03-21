import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ShipmentCreateInput = {
  courier?: CourierWhereUniqueInput | null;
  deliveryAddressId?: string | null;
  orderItem: InputJsonValue;
};
