//importing packages 
import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"


chai.use(require('chai-json-schema'));

//variables
const url = supertest(config.baseurl);

describe('DELETE/users', () => {
    it('DELETE/delete details in id', async () => {
        const response = await url.delete(config.deleteuser)

            .expect(204)
            .expect((res) => {
                //console.log(res)
                //expect(res.body).to.be.jsonSchema(jsonschema1.valid_schema)
            })

            it('DELETE/delete invalid details in id', async () => {
                const response = await url.delete(config.deleteuser)
        
                    .expect(204)
                    .expect((res) => {
                        //console.log(res)
                        //expect(res.body).to.be.jsonSchema(jsonschema1.valid_schema)
                    })

    });
});
})
