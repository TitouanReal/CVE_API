import { IsString } from "class-validator";
import { isStringObject } from "util/types";

export class Cna {
    /**
     * CVE identifier
     */
    @IsString()
    partner: string;

    /**
     * Date of publication of the CVE
     */
    @IsString()
    scope: string;

    /**
     * Date of publication of the CVE
     */
    @IsString()
    organizationType: string;

    /**
     * Vulnerability status of the CVE
     */
    @IsString()
    vulnerabilityStatus: string;

    /**
     * Impact score of the CVE
     */
    @IsString()
    impactScore: string;

    /**
     * Description of the CVE
     */
    @IsString()
    description: string;

    constructor(
        id: string,
        datePublished: string,
        dateLastModified: string,
        vulnerabilityStatus: string,
        impactScore: string,
        description: string) {
        this.id = id;
        this.datePublished = datePublished;
        this.dateLastModified = dateLastModified;
        this.vulnerabilityStatus = vulnerabilityStatus;
        this.impactScore = impactScore;
        this.description = description;
    }
}
