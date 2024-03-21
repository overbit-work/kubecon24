import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";

export type CourierAssignedDriverUpdateInput = {
  courier?: CourierWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
