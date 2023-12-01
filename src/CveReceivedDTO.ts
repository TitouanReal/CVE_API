import { CveContainerDTO } from './CveContainerDTO';

export interface CveReceivedDTO {
    resultsPerPage: number;
    startIndex: number;
    totalResults: number;
    format: string;
    version: string;
    timestamp: string;
    vulnerabilities: CveContainerDTO[];
}
