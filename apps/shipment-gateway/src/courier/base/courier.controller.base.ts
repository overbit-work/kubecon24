/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CourierService } from "../courier.service";
import { CourierCreateInput } from "./CourierCreateInput";
import { Courier } from "./Courier";
import { CourierFindManyArgs } from "./CourierFindManyArgs";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";
import { CourierUpdateInput } from "./CourierUpdateInput";
import { CourierAssignedDriverFindManyArgs } from "../../courierAssignedDriver/base/CourierAssignedDriverFindManyArgs";
import { CourierAssignedDriver } from "../../courierAssignedDriver/base/CourierAssignedDriver";
import { CourierAssignedDriverWhereUniqueInput } from "../../courierAssignedDriver/base/CourierAssignedDriverWhereUniqueInput";
import { ShipmentFindManyArgs } from "../../shipment/base/ShipmentFindManyArgs";
import { Shipment } from "../../shipment/base/Shipment";
import { ShipmentWhereUniqueInput } from "../../shipment/base/ShipmentWhereUniqueInput";

export class CourierControllerBase {
  constructor(protected readonly service: CourierService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Courier })
  async createCourier(
    @common.Body() data: CourierCreateInput
  ): Promise<Courier> {
    return await this.service.createCourier({
      data: data,
      select: {
        billingAddress: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Courier] })
  @ApiNestedQuery(CourierFindManyArgs)
  async couriers(@common.Req() request: Request): Promise<Courier[]> {
    const args = plainToClass(CourierFindManyArgs, request.query);
    return this.service.couriers({
      ...args,
      select: {
        billingAddress: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async courier(
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Courier | null> {
    const result = await this.service.courier({
      where: params,
      select: {
        billingAddress: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCourier(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() data: CourierUpdateInput
  ): Promise<Courier | null> {
    try {
      return await this.service.updateCourier({
        where: params,
        data: data,
        select: {
          billingAddress: true,
          country: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCourier(
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Courier | null> {
    try {
      return await this.service.deleteCourier({
        where: params,
        select: {
          billingAddress: true,
          country: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/courierAssignedDrivers")
  @ApiNestedQuery(CourierAssignedDriverFindManyArgs)
  async findCourierAssignedDrivers(
    @common.Req() request: Request,
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<CourierAssignedDriver[]> {
    const query = plainToClass(
      CourierAssignedDriverFindManyArgs,
      request.query
    );
    const results = await this.service.findCourierAssignedDrivers(params.id, {
      ...query,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/courierAssignedDrivers")
  async connectCourierAssignedDrivers(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: CourierAssignedDriverWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courierAssignedDrivers: {
        connect: body,
      },
    };
    await this.service.updateCourier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/courierAssignedDrivers")
  async updateCourierAssignedDrivers(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: CourierAssignedDriverWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courierAssignedDrivers: {
        set: body,
      },
    };
    await this.service.updateCourier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/courierAssignedDrivers")
  async disconnectCourierAssignedDrivers(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: CourierAssignedDriverWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courierAssignedDrivers: {
        disconnect: body,
      },
    };
    await this.service.updateCourier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/shipments")
  @ApiNestedQuery(ShipmentFindManyArgs)
  async findShipments(
    @common.Req() request: Request,
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Shipment[]> {
    const query = plainToClass(ShipmentFindManyArgs, request.query);
    const results = await this.service.findShipments(params.id, {
      ...query,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deliveryAddressId: true,
        id: true,
        orderItem: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/shipments")
  async connectShipments(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shipments: {
        connect: body,
      },
    };
    await this.service.updateCourier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/shipments")
  async updateShipments(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shipments: {
        set: body,
      },
    };
    await this.service.updateCourier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/shipments")
  async disconnectShipments(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shipments: {
        disconnect: body,
      },
    };
    await this.service.updateCourier({
      where: params,
      data,
      select: { id: true },
    });
  }
}
