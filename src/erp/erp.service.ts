import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class ErpService {
    private clientes = [];

    get() {
        return "Obteniendo datos desde service..."
    }

    getClients() {
        return this.clientes;
    }

    getClientsByAsesor(cod_asesor: number) {
        console.log('El param es:', cod_asesor);
        const clientesEncontrados = this.clientes.filter(cliente => cliente.cod_asesor == cod_asesor);

        if(clientesEncontrados.length == 0) {
            return new NotFoundException("No se econtraron clientes asociados");
        }

        return clientesEncontrados;
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

    createClient(client: ClientDto) {
        console.log(client);
        this.clientes.push(client);
        return "Creando nuevo cliente...desde service"
    }

    updateClientStatus() {
        return "Actualiza el estado del cliente..."
    }

    insertAttach() {
        return "Insertando adjunto...desde service"
    }


}
