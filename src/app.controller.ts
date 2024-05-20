import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {
    @Get("/")
    get() {
        return "API - ASIS";
    }
}
