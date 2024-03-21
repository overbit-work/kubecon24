import { CourierWhereUniqueInput } from "../courier/CourierWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CourierAssignedDriverWhereInput = {
  courier?: CourierWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
