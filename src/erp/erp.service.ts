import { Injectable } from '@nestjs/common';

@Injectable()
export class ErpService {

    get() {
        return "Obteniendo datos desde service..."
    }

    getClients() {
        return "Obteniendo clientes del erp...desde service"
    }

    getClientsByAsesor() {
        return "Obteniendo clientes POR ASESOR del erp...desde service"
    }

    getClientsByPlan() {
        return "Obteniendo clientes POR PLAN del erp...desde service"
    }

    // GET ALL CLIENTS BY STATE
    getClientsByState() {
        return "Obteniendo clientes POR ESTADO del erp...desde service"
    }

    // GET ALL CLIENTS BY CREATION DATE
    getClientsByDate() {
        return "Obteniendo clientes POR FECHA DE CREACION del erp...desde service"
    }

    createClient() {
        return "Creando nuevo cliente...desde service"
    }

    updateClientStatus() {
        return "Actualiza el estado del cliente..."
    }

    insertAttach() {
        return "Insertando adjunto...desde service"
    }


}
