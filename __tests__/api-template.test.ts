import { createMocks } from 'node-mocks-http';
import ApiTemplate from '../src/pages/api/api-template';

describe('/api/api-template', () => {
    it('returns a the name passed in the query', async () => {
        const { req, res } = createMocks({
            method: 'GET',
            query: {
                name: 'John Doe',
            },
        });

        await ApiTemplate(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                name: 'John Doe',
            })
        );
    });
});
