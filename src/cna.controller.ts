import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { CveService } from './cve.service';
import { Cve } from './Cve';

@Controller('cves')
export class CveController {
    constructor(private readonly cveService: CveService) {}

    @Get()
    getAllCves(): Array<Cve> {
        return this.cveService.getAllCves();
    }

    @Get()
    getNumberOfCves(): number {
        return this.cveService.getTotalNumberOfCves();
    }

    @Get(':number')
    getCvesBetween(@Param('id') id: string): Array<Cve> {
        return this.cveService.getAllCves();
    }

    @Get(':id')
    getCve(@Param('id') id: string): Cve {
        return this.cveService.getCve(id);
    }
}
