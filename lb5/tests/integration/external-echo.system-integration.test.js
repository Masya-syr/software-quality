import {
    describe,
    expect,
    test,
} from 'vitest';

import {ExternalEchoGateway} from '../../src/external-echo.gateway.js';

describe('ExternalEchoGateway integration', () => {
    test('sends order data to external system', async () => {
        const gateway = new ExternalEchoGateway();

        const result = await gateway.sendOrder('ORD-001', 270);

        expect(result).toEqual({
            orderId: 'ORD-001',
            total: 270,
        });
    })
})