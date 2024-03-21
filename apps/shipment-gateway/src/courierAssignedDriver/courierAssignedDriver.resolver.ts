import * as graphql from "@nestjs/graphql";
import { CourierAssignedDriverResolverBase } from "./base/courierAssignedDriver.resolver.base";
import { CourierAssignedDriver } from "./base/CourierAssignedDriver";
import { CourierAssignedDriverService } from "./courierAssignedDriver.service";

@graphql.Resolver(() => CourierAssignedDriver)
export class CourierAssignedDriverResolver extends CourierAssignedDriverResolverBase {
  constructor(protected readonly service: CourierAssignedDriverService) {
    super(service);
  }
}
