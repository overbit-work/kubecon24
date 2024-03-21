import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourierAssignedDriverService } from "./courierAssignedDriver.service";
import { CourierAssignedDriverControllerBase } from "./base/courierAssignedDriver.controller.base";

@swagger.ApiTags("courierAssignedDrivers")
@common.Controller("courierAssignedDrivers")
export class CourierAssignedDriverController extends CourierAssignedDriverControllerBase {
  constructor(protected readonly service: CourierAssignedDriverService) {
    super(service);
  }
}
