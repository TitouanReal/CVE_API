import { CvssV2DTO } from './CvssV2DTO';

export interface MetricsDTO {
    cvssMetricV31: string;
    cvssMetricV2: CvssV2DTO[];
}
