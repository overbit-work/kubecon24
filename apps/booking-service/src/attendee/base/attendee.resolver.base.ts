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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Attendee } from "./Attendee";
import { AttendeeCountArgs } from "./AttendeeCountArgs";
import { AttendeeFindManyArgs } from "./AttendeeFindManyArgs";
import { AttendeeFindUniqueArgs } from "./AttendeeFindUniqueArgs";
import { CreateAttendeeArgs } from "./CreateAttendeeArgs";
import { UpdateAttendeeArgs } from "./UpdateAttendeeArgs";
import { DeleteAttendeeArgs } from "./DeleteAttendeeArgs";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { Company } from "../../company/base/Company";
import { AttendeeService } from "../attendee.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Attendee)
export class AttendeeResolverBase {
  constructor(
    protected readonly service: AttendeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "read",
    possession: "any",
  })
  async _attendeesMeta(
    @graphql.Args() args: AttendeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Attendee])
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "read",
    possession: "any",
  })
  async attendees(
    @graphql.Args() args: AttendeeFindManyArgs
  ): Promise<Attendee[]> {
    return this.service.attendees(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Attendee, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "read",
    possession: "own",
  })
  async attendee(
    @graphql.Args() args: AttendeeFindUniqueArgs
  ): Promise<Attendee | null> {
    const result = await this.service.attendee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Attendee)
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "create",
    possession: "any",
  })
  async createAttendee(
    @graphql.Args() args: CreateAttendeeArgs
  ): Promise<Attendee> {
    return await this.service.createAttendee({
      ...args,
      data: {
        ...args.data,

        company: args.data.company
          ? {
              connect: args.data.company,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Attendee)
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "update",
    possession: "any",
  })
  async updateAttendee(
    @graphql.Args() args: UpdateAttendeeArgs
  ): Promise<Attendee | null> {
    try {
      return await this.service.updateAttendee({
        ...args,
        data: {
          ...args.data,

          company: args.data.company
            ? {
                connect: args.data.company,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Attendee)
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "delete",
    possession: "any",
  })
  async deleteAttendee(
    @graphql.Args() args: DeleteAttendeeArgs
  ): Promise<Attendee | null> {
    try {
      return await this.service.deleteAttendee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @graphql.Parent() parent: Attendee,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Company, {
    nullable: true,
    name: "company",
  })
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async getCompany(
    @graphql.Parent() parent: Attendee
  ): Promise<Company | null> {
    const result = await this.service.getCompany(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
