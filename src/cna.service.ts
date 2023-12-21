import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cve } from './Cve';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, tap } from 'rxjs';
import { CveReceivedDTO } from './CveReceivedDTO';
import { readFile } from 'fs/promises';

@Injectable()
export class CveService implements OnModuleInit {
    private readonly storage = new Map<string, Cve>();

    constructor(private readonly httpService: HttpService) {}

    async onModuleInit() {
        // await this.loadSomeCves(0, 10);
        // await this.loadAllCvesFromServer();
        await this.loadBooksFromFile();
        console.log(`Storage contains ${this.storage.size} CVEs`);
    }

    private async loadBooksFromFile() {
        const data = await readFile('src/dataset.json');
        const cves: Array<Cve> = JSON.parse(data.toString());
        cves.forEach((cve) => this.addCve(cve));
    }

    private async loadAllCvesFromServer(): Promise<void> {
        let noCves = 0;
        while (true) {
            let results = await this.loadSomeCves(noCves, 2000);
            noCves += results;
            console.log(noCves);
            await new Promise(f => setTimeout(f, 5000));
            if (results < 2000) {
                break;
            }
        }
    }

    private async loadSomeCves(start: number, results: number): Promise<number> {
        return firstValueFrom(
            this.httpService.get(`https://services.nvd.nist.gov/rest/json/cves/2.0/?resultsPerPage=${results}&startIndex=${start}`).pipe(
                map((response) => response.data),
                tap((data: CveReceivedDTO) => {
                    data.vulnerabilities.forEach((cveContainer) =>
                        this.addCve({
                            id: cveContainer.cve.id,
                            datePublished: cveContainer.cve.published,
                            dateLastModified: cveContainer.cve.lastModified,
                            vulnerabilityStatus: cveContainer.cve.vulnStatus,
                            impactScore: cveContainer.cve.metrics.cvssMetricV2[0].impactScore,
                            description: cveContainer.cve.descriptions[0].value
                        }),
                    );
                }),
                map((data: CveReceivedDTO) => data.resultsPerPage),
            ),
        );
    }

    addCve(cve: Cve) {
        this.storage.set(cve.id, cve);
    }

    getCve(id: string): Cve {
        const cve = this.storage.get(id);
        if (!cve) {
            throw new Error(`CVE with id ${id} not found`);
        }
        return cve;
    }

    getAllCves(): Array<Cve> {
        return Array.from(this.storage.values());
    }

    getTotalNumberOfCves(): number {
        return this.storage.size;
    }

    getCvesPublishedAfter(dateAsString: string): Array<Cve> {
        const date = new Date(dateAsString);
        return this.getAllCves()
            .filter((cve) => new Date(cve.datePublished) > date)
    }
}
