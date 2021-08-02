import { readFileSync } from 'fs';
import { join } from 'path';

import { parse } from '..';

test('parse', () => {
  const buffer = readFileSync(join(__dirname, 'data', 'Ft-ir.spc'));
  const result = parse(buffer);
  expect(result.spectra[0].variables[0]).toMatchObject({
    symbol: 'x',
    label: 'Wavenumber',
    units: 'cm-1',
    type: 'INDEPENDENT',
  });
  expect(result.spectra).toHaveLength(1);
  expect(Object.keys(result.meta)).toHaveLength(31);
});
