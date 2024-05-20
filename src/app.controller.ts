import { Controller, Get } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('/app')
@ApiTags("Home")
@ApiSecurity('apikey') 
export class AppController {
    @Get("/")
    get() {
        return { msg: "ASIS IA - API"};
    }
}
