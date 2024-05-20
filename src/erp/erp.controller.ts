import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ErpService } from './erp.service';
import { ClientDto } from './dto/client.dto';

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
    getAllClientsByAsesor(@Param("cod_asesor") cod_asesor: string) {
        return this.erpService.getClientsByAsesor(cod_asesor);
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
    // @UsePipes(new ValidationPipe()) // Se importan las validaciones del dto ClientDto
    postClient(@Body() client: ClientDto) {
        return this.erpService.createClient(client);
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
