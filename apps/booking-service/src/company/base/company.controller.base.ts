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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CompanyService } from "../company.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CompanyCreateInput } from "./CompanyCreateInput";
import { Company } from "./Company";
import { CompanyFindManyArgs } from "./CompanyFindManyArgs";
import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";
import { CompanyUpdateInput } from "./CompanyUpdateInput";
import { AttendeeFindManyArgs } from "../../attendee/base/AttendeeFindManyArgs";
import { Attendee } from "../../attendee/base/Attendee";
import { AttendeeWhereUniqueInput } from "../../attendee/base/AttendeeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CompanyControllerBase {
  constructor(
    protected readonly service: CompanyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Company })
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCompany(
    @common.Body() data: CompanyCreateInput
  ): Promise<Company> {
    return await this.service.createCompany({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Company] })
  @ApiNestedQuery(CompanyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async companies(@common.Req() request: Request): Promise<Company[]> {
    const args = plainToClass(CompanyFindManyArgs, request.query);
    return this.service.companies({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async company(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    const result = await this.service.company({
      where: params,
      select: {
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCompany(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() data: CompanyUpdateInput
  ): Promise<Company | null> {
    try {
      return await this.service.updateCompany({
        where: params,
        data: data,
        select: {
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
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCompany(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    try {
      return await this.service.deleteCompany({
        where: params,
        select: {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/attendees")
  @ApiNestedQuery(AttendeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "read",
    possession: "any",
  })
  async findAttendees(
    @common.Req() request: Request,
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Attendee[]> {
    const query = plainToClass(AttendeeFindManyArgs, request.query);
    const results = await this.service.findAttendees(params.id, {
      ...query,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        surnam: true,
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

  @common.Post("/:id/attendees")
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "update",
    possession: "any",
  })
  async connectAttendees(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: AttendeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendees: {
        connect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attendees")
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "update",
    possession: "any",
  })
  async updateAttendees(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: AttendeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendees: {
        set: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attendees")
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "update",
    possession: "any",
  })
  async disconnectAttendees(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: AttendeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendees: {
        disconnect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }
}
