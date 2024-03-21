import { Courier as TCourier } from "../api/courier/Courier";

export const COURIER_TITLE_FIELD = "name";

export const CourierTitle = (record: TCourier): string => {
  return record.name?.toString() || String(record.id);
};
