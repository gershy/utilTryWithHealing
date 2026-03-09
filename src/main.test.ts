import { assertEqual, testRunner } from '../build/utils.test.ts';
import tryWithHealing from './main.ts';

// Type testing
(async () => {
  
  type Enforce<Provided, Expected extends Provided> = { provided: Provided, expected: Expected };
  
  type Tests = {
    1: Enforce<{ x: 'y' }, { x: 'y' }>,
  };
  
})();

testRunner([
  
  { name: 'basic', fn: async () => {
    
    const result = await tryWithHealing({
      fn: () => Promise.resolve('hi'),
      canHeal: () => false,
      heal: async () => void 0
    });
    
    assertEqual(result, 'hi');
    
  }}
  
]);