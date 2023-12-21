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
        /*this.addCna({
            Partner: "1E Limited",
            Scope: "All 1E products (including end-of-life/end-of-service products), as well as vulnerabilities in third-party software discovered by 1E that are not in another CNA's scope",
            "Organization Type": "Vendor, Researcher",
            Country: "India"
        });
        this.addCna({
            Partner: "AppCheck Ltd.",
            Scope: "Vulnerabilities discovered by AppCheck that are not within another CNA's scope",
            "Organization Type": "Researcher",
            Country: "India"
        });*/
        console.log(`Storage contains ${this.storage.size} Cnas`);
    }

    private async loadAllCnasFromServer(): Promise<number> {
        return firstValueFrom(
            this.httpService.get(`https://api.jsonbin.io/v3/b/65819713dc74654018852d51`).pipe(
                map((response) => response.data),
                tap((data: CnaReceivedDTO) => {
                    data.record.forEach((cna) =>
                        console.log(cna['Organization Type']),
                    );
                }),
                tap((data: CnaReceivedDTO) => {
                    data.record.forEach((cna) =>
                        this.addCna({
                            Partner: cna.Partner,
                            Scope: cna.Scope,
                            "Organization Type": cna['Organization Type'],
                            Country: cna.Country
                        }),
                    );
                }),
                map((data: CnaReceivedDTO) => 5),
            )
        );
    }

    addCna(cna: CnaDTO) {
        const cnaComplete = new Cna(cna.Partner, cna.Scope, cna["Organization Type"], cna.Country);
        this.storage.set(cna.Partner, cnaComplete);
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
