import { CourierAssignedDriver as TCourierAssignedDriver } from "../api/courierAssignedDriver/CourierAssignedDriver";

export const COURIERASSIGNEDDRIVER_TITLE_FIELD = "name";

export const CourierAssignedDriverTitle = (
  record: TCourierAssignedDriver
): string => {
  return record.name?.toString() || String(record.id);
};
