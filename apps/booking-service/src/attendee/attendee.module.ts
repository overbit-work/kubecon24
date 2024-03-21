import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttendeeModuleBase } from "./base/attendee.module.base";
import { AttendeeService } from "./attendee.service";
import { AttendeeController } from "./attendee.controller";

@Module({
  imports: [AttendeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttendeeController],
  providers: [AttendeeService],
  exports: [AttendeeService],
})
export class AttendeeModule {}
