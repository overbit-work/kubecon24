import { Module } from "@nestjs/common";
import { CourierAssignedDriverModuleBase } from "./base/courierAssignedDriver.module.base";
import { CourierAssignedDriverService } from "./courierAssignedDriver.service";
import { CourierAssignedDriverController } from "./courierAssignedDriver.controller";
import { CourierAssignedDriverResolver } from "./courierAssignedDriver.resolver";

@Module({
  imports: [CourierAssignedDriverModuleBase],
  controllers: [CourierAssignedDriverController],
  providers: [CourierAssignedDriverService, CourierAssignedDriverResolver],
  exports: [CourierAssignedDriverService],
})
export class CourierAssignedDriverModule {}
