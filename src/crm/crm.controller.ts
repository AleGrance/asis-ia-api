import { Controller, Get } from '@nestjs/common';
import { CrmService } from './crm.service';

@Controller('/crm')
export class CrmController {
    constructor(private crmService: CrmService) {}

    @Get("/")
    getAll() {
        return "Obteniendo daots del crm..."
    }
}
