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
  Attendee, // @ts-ignore
  Booking, // @ts-ignore
  Company,
} from "@prisma/client";

export class AttendeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AttendeeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendeeCountArgs>
  ): Promise<number> {
    return this.prisma.attendee.count(args);
  }

  async attendees<T extends Prisma.AttendeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendeeFindManyArgs>
  ): Promise<Attendee[]> {
    return this.prisma.attendee.findMany(args);
  }
  async attendee<T extends Prisma.AttendeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendeeFindUniqueArgs>
  ): Promise<Attendee | null> {
    return this.prisma.attendee.findUnique(args);
  }
  async createAttendee<T extends Prisma.AttendeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendeeCreateArgs>
  ): Promise<Attendee> {
    return this.prisma.attendee.create<T>(args);
  }
  async updateAttendee<T extends Prisma.AttendeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendeeUpdateArgs>
  ): Promise<Attendee> {
    return this.prisma.attendee.update<T>(args);
  }
  async deleteAttendee<T extends Prisma.AttendeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AttendeeDeleteArgs>
  ): Promise<Attendee> {
    return this.prisma.attendee.delete(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<Booking[]> {
    return this.prisma.attendee
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }

  async getCompany(parentId: string): Promise<Company | null> {
    return this.prisma.attendee
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }
}
