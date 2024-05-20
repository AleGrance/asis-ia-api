import { Module } from '@nestjs/common';
import { ErpController } from './erp.controller';
import { ErpService } from './erp.service';

@Module({
  controllers: [ErpController],
  providers: [ErpService]
})
export class ErpModule {}
