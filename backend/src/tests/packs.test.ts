// import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';
// import Pack from '../database/models/PackModel';

import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect } = chai;

describe('The route /update', () => {
  let response: Response;

  it('should return the expected values', async () => {
    response = await chai.request(app).put('/update')
    expect(response.status).to.be.equal(200);
    expect(response.body.message).to.be.equal('update route works');
  });
});
