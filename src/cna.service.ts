import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cna } from './Cna';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, tap } from 'rxjs';
import { CnaDTO } from './CnaDTO';
import { readFile } from 'fs/promises';
import { CnaReceivedDTO } from './CnaReceivedDTO';

@Injectable()
export class CnaService implements OnModuleInit {
    private readonly storage = new Map<string, Cna>();

    constructor(private readonly httpService: HttpService) {}

    async onModuleInit() {
        // await this.loadSomeCves(0, 10);
        // await this.loadAllCvesFromServer();
        await this.loadAllCnasFromServer();
        console.log(`Storage contains ${this.storage.size} CVEs`);
    }

    private async loadAllCnasFromServer(): Promise<void> {
            this.httpService.get(`https://api.jsonbin.io/v3/b/65819713dc74654018852d51`).pipe(
                map((response) => response.data),
                tap((data: CnaReceivedDTO) => {
                    data.record.forEach((cna) =>
                        this.addCna({
                            partner: cna.partner,
                            scope: cna.scope,
                            organizationType: cna.organizationType,
                            country: cna.country
                        }),
                    );
                })
            )
    }

    addCna(cna: CnaDTO) {
        const cnaComplete = new Cna(cna.partner, cna.scope, cna.organizationType, cna.country);
        this.storage.set(cna.partner, cnaComplete);
    }

    getCna(partner: string): Cna {
        const cna = this.storage.get(partner);
        if (!cna) {
            throw new Error(`CNA ${partner} not found`);
        }
        return cna;
    }

    getAllCnas(): Array<Cna> {
        return Array.from(this.storage.values());
    }

    getTotalNumberOfCnas(): number {
        return this.storage.size;
    }

    //getCvesPublishedAfter(dateAsString: string): Array<Cve> {
    //    const date = new Date(dateAsString);
    //    return this.getAllCves()
    //        .filter((cve) => new Date(cve.datePublished) > date)
    //}
}
