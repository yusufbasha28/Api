//importing packages 
import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"
import jsonschema from "../test_data/jsonschema/putusers.json"
import inputdata from "../inputdata"

chai.use(require('chai-json-schema'));

//variables
const url = supertest(config.baseurl);
//const url = supertest(config.baseurl2);

describe('Put/users', () => {
  it('PUT/update details in id', async () => {
    const response = await url.put(config.putuser)
      .type('application/json')
      .send({
        'name': inputdata.putbody,
        'job': inputdata.putbody1,
      })
      .expect(200)
      .expect((res) => {
        // console.log(res)
        expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
      })
  })

  it('update details in invalid id', async () => {
    const response = await url.put(config.putuser)
      .type('application/json')
      .send({
        'name': inputdata.putbody2,
        'job': inputdata.putbody3,
      })
      .expect(200)
      .expect((res) => {
        // console.log(res)
        expect(res.body).to.be.jsonSchema(jsonschema.invalid_schema)
      })
  })
})
