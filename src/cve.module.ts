import { Module } from '@nestjs/common';
import { CveController } from './cve.controller';
import { CveService } from './cve.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [CveController],
    providers: [CveService],
})
export class CveModule {}
