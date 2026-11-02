import {
    describe,
    expect,
    test,
} from 'vitest';

import {CartService} from '../../src/cart-service.js';

describe('CartService + calculateDiscount integration', () => {
    test('applies discount to calculated cart total', () => {
        const cartService = new CartService();

        cartService.addItem(100);
        cartService.addItem(200);

        const result = cartService.getFinalTotal(10);
    
        expect(result).toBe(270);
    })

    test('throws error for invalid discount percent', () => {
        const cartService = new CartService();

        cartService.addItem(100);
        
        expect(() => {
            cartService.getFinalTotal(-5);
        }).toThrow('Discount must be between 0 and 100');
    })
})