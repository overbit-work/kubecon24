import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BookingModuleBase } from "./base/booking.module.base";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";

@Module({
  imports: [BookingModuleBase, forwardRef(() => AuthModule)],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule {}
