import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "deliveryAddressId";

export const ShipmentTitle = (record: TShipment): string => {
  return record.deliveryAddressId?.toString() || String(record.id);
};
