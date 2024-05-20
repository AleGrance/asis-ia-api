import { Get, Module } from '@nestjs/common';
import { ErpModule } from './erp/erp.module';
import { CrmModule } from './crm/crm.module';
import { AppController } from './app.controller';

@Module({
  imports: [ErpModule, CrmModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  
}
