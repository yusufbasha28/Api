//importing packages 
import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"
import jsonschema1 from "../test_data/jsonschema/getusers.json"

chai.use(require('chai-json-schema'));

//variables
const url = supertest(config.baseurl);

describe('GET/users', () => {
  it('GET/get details in id', async () => {
    const response = await url.get(config.getuser)

      .expect(200)
      .expect((res) => {
        //console.log(res)
        expect(res.body).to.be.jsonSchema(jsonschema1.valid_schema)
      })
    });

    it('get details of invalid id', async () => {
      const response = await url.get(config.invalidgetuser)

        .expect(404)
        .expect((res) => {
          // console.log(res)
          expect(res.body).to.be.jsonSchema(jsonschema1.invalid_schema)
        })

    });
  });


