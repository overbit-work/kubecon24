/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Shipment, // @ts-ignore
  Courier,
} from "@prisma/client";

export class ShipmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ShipmentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentCountArgs>
  ): Promise<number> {
    return this.prisma.shipment.count(args);
  }

  async shipments<T extends Prisma.ShipmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentFindManyArgs>
  ): Promise<Shipment[]> {
    return this.prisma.shipment.findMany(args);
  }
  async shipment<T extends Prisma.ShipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentFindUniqueArgs>
  ): Promise<Shipment | null> {
    return this.prisma.shipment.findUnique(args);
  }
  async createShipment<T extends Prisma.ShipmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentCreateArgs>
  ): Promise<Shipment> {
    return this.prisma.shipment.create<T>(args);
  }
  async updateShipment<T extends Prisma.ShipmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentUpdateArgs>
  ): Promise<Shipment> {
    return this.prisma.shipment.update<T>(args);
  }
  async deleteShipment<T extends Prisma.ShipmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentDeleteArgs>
  ): Promise<Shipment> {
    return this.prisma.shipment.delete(args);
  }

  async getCourier(parentId: string): Promise<Courier | null> {
    return this.prisma.shipment
      .findUnique({
        where: { id: parentId },
      })
      .courier();
  }
}
