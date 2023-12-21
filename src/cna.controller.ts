import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { CnaService } from './cna.service';
import { Cna } from './Cna';

@Controller('cnas')
export class CnaController {
    constructor(private readonly cnaService: CnaService) {}

    @Get()
    getAllCnas(): Array<Cna> {
        return this.cnaService.getAllCnas();
    }

    @Get()
    getNumberOfCnas(): number {
        return this.cnaService.getTotalNumberOfCnas();
    }

    @Get(':partner')
    getCna(@Param('partner') partner: string): Cna {
        return this.cnaService.getCna(partner);
    }
}
