import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { CveModule } from '../src/cve.module';

describe('CVEs API', () => {
    let app: INestApplication;
    let httpRequester: supertest.SuperTest<supertest.Test>;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CveModule],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();

        httpRequester = request(app.getHttpServer());
    });

    it(`/GET cves`, async () => {
        const response = await httpRequester.get('/cves').expect(200);

        expect(response.body).toEqual(expect.any(Array));
    });
});
