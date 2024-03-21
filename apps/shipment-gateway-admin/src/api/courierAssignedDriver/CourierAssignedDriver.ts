import { Courier } from "../courier/Courier";

export type CourierAssignedDriver = {
  courier?: Courier | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
