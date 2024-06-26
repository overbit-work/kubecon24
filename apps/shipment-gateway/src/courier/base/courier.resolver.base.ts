/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Courier } from "./Courier";
import { CourierCountArgs } from "./CourierCountArgs";
import { CourierFindManyArgs } from "./CourierFindManyArgs";
import { CourierFindUniqueArgs } from "./CourierFindUniqueArgs";
import { CreateCourierArgs } from "./CreateCourierArgs";
import { UpdateCourierArgs } from "./UpdateCourierArgs";
import { DeleteCourierArgs } from "./DeleteCourierArgs";
import { CourierAssignedDriverFindManyArgs } from "../../courierAssignedDriver/base/CourierAssignedDriverFindManyArgs";
import { CourierAssignedDriver } from "../../courierAssignedDriver/base/CourierAssignedDriver";
import { ShipmentFindManyArgs } from "../../shipment/base/ShipmentFindManyArgs";
import { Shipment } from "../../shipment/base/Shipment";
import { CourierService } from "../courier.service";
@graphql.Resolver(() => Courier)
export class CourierResolverBase {
  constructor(protected readonly service: CourierService) {}

  async _couriersMeta(
    @graphql.Args() args: CourierCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Courier])
  async couriers(
    @graphql.Args() args: CourierFindManyArgs
  ): Promise<Courier[]> {
    return this.service.couriers(args);
  }

  @graphql.Query(() => Courier, { nullable: true })
  async courier(
    @graphql.Args() args: CourierFindUniqueArgs
  ): Promise<Courier | null> {
    const result = await this.service.courier(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Courier)
  async createCourier(
    @graphql.Args() args: CreateCourierArgs
  ): Promise<Courier> {
    return await this.service.createCourier({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Courier)
  async updateCourier(
    @graphql.Args() args: UpdateCourierArgs
  ): Promise<Courier | null> {
    try {
      return await this.service.updateCourier({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Courier)
  async deleteCourier(
    @graphql.Args() args: DeleteCourierArgs
  ): Promise<Courier | null> {
    try {
      return await this.service.deleteCourier(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CourierAssignedDriver], {
    name: "courierAssignedDrivers",
  })
  async findCourierAssignedDrivers(
    @graphql.Parent() parent: Courier,
    @graphql.Args() args: CourierAssignedDriverFindManyArgs
  ): Promise<CourierAssignedDriver[]> {
    const results = await this.service.findCourierAssignedDrivers(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Shipment], { name: "shipments" })
  async findShipments(
    @graphql.Parent() parent: Courier,
    @graphql.Args() args: ShipmentFindManyArgs
  ): Promise<Shipment[]> {
    const results = await this.service.findShipments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
