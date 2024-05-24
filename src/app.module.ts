import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_GUARD } from '@nestjs/core';
import { ErpModule } from './modules/erp/erp.module';
import { CrmModule } from './modules/crm/crm.module';
import { AuthGuard } from './common/auth/auth.guard';
import { Firebird } from './modules/firebird/firebird';

@Module({
  imports: [ErpModule, CrmModule],
  controllers: [AppController],
  // Se aplica el guard para todos los controllers
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    Firebird
  ],
})
export class AppModule {
  
}
