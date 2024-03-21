import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";

export type CourierAssignedDriverCreateInput = {
  courier?: CourierWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
