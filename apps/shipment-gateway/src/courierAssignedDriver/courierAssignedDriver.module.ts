import { Module } from "@nestjs/common";
import { CourierAssignedDriverModuleBase } from "./base/courierAssignedDriver.module.base";
import { CourierAssignedDriverService } from "./courierAssignedDriver.service";
import { CourierAssignedDriverController } from "./courierAssignedDriver.controller";

@Module({
  imports: [CourierAssignedDriverModuleBase],
  controllers: [CourierAssignedDriverController],
  providers: [CourierAssignedDriverService],
  exports: [CourierAssignedDriverService],
})
export class CourierAssignedDriverModule {}
