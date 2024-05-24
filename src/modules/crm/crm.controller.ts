import { Controller, Get } from '@nestjs/common';
import { CrmService } from './crm.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/crm')
@ApiTags("CRM")
export class CrmController {
    constructor(private crmService: CrmService) { }

    @Get("/")
    getAll() {
        return "Obteniendo daots del crm..."
    }
}
