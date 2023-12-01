import { DescriptionDTO } from './DescriptionDTO';
import { MetricsDTO } from './MetricsDTO';

enum CVEStatus {
    RECEIVED = 'RECEIVED',
    AWAITING_ANALYSIS = 'AWAITING ANALYSIS',
    UNDERGOING_ANALYSIS = 'UNDERGOING ANALYSIS',
    ANALYZED = 'ANALYZED',
    MODIFIED = 'MODIFIED',
    DEFERRED = 'DEFERRED',
    EJECTED = 'EJECTED',
}

export interface CveDTO {
    id: string;
    sourceIdentifier: string;
    published: string;
    lastModified: string;
    vulnStatus: CVEStatus;
    descriptions: DescriptionDTO[];
    metrics?: MetricsDTO;
    weaknesses?: string;
    configurations?: string;
    references: string;
    vendorComments?: string;
}
