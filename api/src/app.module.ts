import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { MembershipsModule } from './memberships/memberships.module';
import { ElectionsModule } from './elections/elections.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    OrganizationsModule,
    MembershipsModule,
    ElectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
