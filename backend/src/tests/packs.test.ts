// import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';

import { Response } from 'superagent';
import app from '../app';
// import Pack from '../database/models/PackModel';

const EXPECTED_PACKS = [
  { id: 1, packId: 1000, productId: 18, qty: 6 },
  { id: 2, packId: 1010, productId: 24, qty: 1 },
  { id: 3, packId: 1010, productId: 26, qty: 1 },
  { id: 4, packId: 1020, productId: 19, qty: 3 },
  { id: 5, packId: 1020, productId: 21, qty: 3 }
]

chai.use(chaiHttp);
const { expect } = chai;

describe('The route /update', () => {
  let response: Response;

  // todo: mock model call with sinon stub
  it('should return the expected values', async function() {
    response = await chai.request(app).put('/update');
    expect(response.status).to.be.equal(200);
    expect(response.body.data).to.be.deep.equal(EXPECTED_PACKS);
  });
});
