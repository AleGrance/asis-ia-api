import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ErpService } from './erp.service';

@Controller('/api/erp')
export class ErpController {

    constructor(private erpService: ErpService) { }

    @Get("/")
    getAll() {
        return this.erpService.get();
    }

    // GET ALL CLIENTS
    @Get("/clientes")
    getAllClients() {
        return this.erpService.getClients();
    }

    // GET ALL CLIENTS BY ASESOR
    @Get("/clientes/asesor/:cod_asesor")
    getAllClientsByAsesor() {
        return this.erpService.getClientsByAsesor();
    }

    // GET ALL CLIENTS BY PLAN
    @Get("/clientes/plan/:cod_plan")
    getAllClientsByPlan() {
        return this.erpService.getClientsByPlan();
    }

    // GET ALL CLIENTS BY STATE
    @Get("/clientes/estado/:cod_estado")
    getAllClientsByState() {
        return this.erpService.getClientsByState();
    }

    // GET ALL CLIENTS BY CREATION DATE
    @Get("/clientes/fecha-creacion/:date")
    getAllClientsByDate() {
        return this.erpService.getClientsByDate();
    }

    // CREATE NEW CLIENT
    @Post("/clientes")
    postClient() {
        return this.erpService.createClient();
    }

    // UPDATE CLIENTS STATUS
    @Patch("/clientes")
    patchClient() {
        return this.erpService.updateClientStatus();
    }

    // INSERT ATTACH
    @Post("/adjunto")
    insertAttach() {
        return this.erpService.insertAttach();
    }

}
