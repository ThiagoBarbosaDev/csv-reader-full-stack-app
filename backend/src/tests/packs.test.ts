// import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { Response } from 'superagent';
import app from '../app';
// import Pack from '../database/models/PackModel';

const EXPECTED_PACKS = 

chai.use(chaiHttp);
const { expect } = chai;

describe('The route /update', () => {
  let response: Response;

  // todo: mock model call with sinon stub
  it('should return the expected values', async function() {
    response = await chai.request(app).put('/update');
    expect(response.status).to.be.equal(200);
    console.log(response.body.data)
    expect(response.body.data).to.be.deep.equal(EXPECTED_PACKS);
  });
});
