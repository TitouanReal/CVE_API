import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { CnaService } from './cna.service';
import { Cna } from './Cna';

@Controller('cves')
export class CnaController {
    constructor(private readonly cnaService: CnaService) {}

    @Get()
    getAllCves(): Array<Cna> {
        return this.cnaService.getAllCves();
    }

    @Get()
    getNumberOfCves(): number {
        return this.cnaService.getTotalNumberOfCves();
    }

    @Get(':number')
    getCvesBetween(@Param('id') id: string): Array<Cna> {
        return this.cnaService.getAllCves();
    }

    @Get(':id')
    getCve(@Param('id') id: string): Cna {
        return this.cnaService.getCve(id);
    }
}
