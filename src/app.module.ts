import { Get, Module } from '@nestjs/common';
import { ErpModule } from './erp/erp.module';
import { CrmModule } from './crm/crm.module';
import { AppController } from './app.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [ErpModule, CrmModule],
  controllers: [AppController],
  // Se aplica el guard para todos los controllers
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule {
  
}
