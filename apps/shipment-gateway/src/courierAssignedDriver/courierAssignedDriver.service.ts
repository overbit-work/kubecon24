import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourierAssignedDriverServiceBase } from "./base/courierAssignedDriver.service.base";

@Injectable()
export class CourierAssignedDriverService extends CourierAssignedDriverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
