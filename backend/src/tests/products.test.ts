// import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';
// import Product from '../database/models/ProductModel';

import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect } = chai;

describe('The route /validate', () => {
  let response: Response;

  it('should return the expected values', async () => {
    response = await chai.request(app).post('/validate')
    expect(response.status).to.be.equal(200);
    expect(response.body.message).to.be.equal('validate route works');
  });
});
