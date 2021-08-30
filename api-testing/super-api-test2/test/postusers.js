import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"
import jsonschema from "../test_data/jsonschema/postusers.json"
import inputdata from "../inputdata"

chai.use(require('chai-json-schema'));
//variables
const url = supertest(config.baseurl);
//const url = supertest(config.baseurl2);


describe('POST/users', () => {
    it('POST/create details in page', async () => {
        const response = await url.post(config.postuser)
            .type('application/json')
            .send({
                'name': inputdata.postbody,
                'job': inputdata.postbody1,
            })
            .expect(201)
            .expect((res) => {
                //console.log(res)
                expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
            })
        });

        it('POST/create  invalid details in page', async () => {
            const response = await url.post(config.postuser)
                .type('application/json')
                .send({
                    'name': inputdata.postbody2,
                    'job': inputdata.postbody3,

                })
                .expect(201)
                .expect((res) => {
                    //console.log(res)
                    expect(res.body).to.be.jsonSchema(jsonschema.invalid_schema)
                })


        });
    });

