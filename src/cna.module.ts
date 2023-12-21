import { Module } from '@nestjs/common';
import { CnaController } from './cna.controller';
import { CnaService } from './cna.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [CnaController],
    providers: [CnaService],
})
export class CnaModule {}
