import { SpecificationVersion } from '@pact-foundation/pact';
import { pactWith } from 'jest-pact';
import axios from 'axios';

const promotionTargets = [{
  description: "description",
  endDate: "1996-06-13 06:34:36",
  id: "1",
  startDate: "1978-03-02 23:46:02",
  title: "title",
  type: "DISCOUNT",
  spec: SpecificationVersion.SPECIFICATION_VERSION_V2,
}];

pactWith({
  consumer: 'pricing-engine-ui',
  provider: 'pricing-engine-service',
}, provider => {
  let client;

  beforeEach(() => {
    client = {
      getPromotions: () => axios.get(`${provider.mockService.baseUrl}/promotions`),
    }
  });
  
  describe('get promotion pact', () => {
    it('should return promotions with 200 httpCode', async () => {
      await provider.addInteraction({
        state: 'there are promotions',
        uponReceiving: 'a request to get Promotions',
        withRequest: {
          path: '/promotions',
          method: 'GET',
        },
        willRespondWith: {
          body: promotionTargets,
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          }
        }
      })
      const { data } = await client.getPromotions();
      expect(data).toEqual(promotionTargets)
    })
  })
})