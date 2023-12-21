import { Module } from '@nestjs/common';
import { CveModule } from './cve.module';
import { CnaModule } from './cna.module';

@Module({
  imports: [CveModule, CnaModule],
})
export class MainModule {}