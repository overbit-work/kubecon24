import { Module } from "@nestjs/common";
import { ShipmentModule } from "./shipment/shipment.module";
import { CourierModule } from "./courier/courier.module";
import { CourierAssignedDriverModule } from "./courierAssignedDriver/courierAssignedDriver.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    ShipmentModule,
    CourierModule,
    CourierAssignedDriverModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
