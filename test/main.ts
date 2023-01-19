import { expect } from 'chai';
import AluminumSheet from '../src/main';

describe('AluminumSheet', () => {
  const sheet = new AluminumSheet(4, 5);

  it('has a width', () => {
    expect(sheet.width).to.equal(4);
  });

  it('has a height', () => {
    expect(sheet.height).to.equal(5);
  });

  it('has an area', () => {
    expect(sheet.area).to.equal(20);
  });

  it('has a perimeter', () => {
    expect(sheet.perimeter).to.equal(18);
  });

  it('has a density', () => {
    expect(sheet.density).to.equal(2.7);
  });

  it('has a mass', () => {
    expect(sheet.mass).to.equal(54);
  });

  it('has a weight', () => {
    expect(sheet.weight).to.equal(529.2);
  });

  it('has an atomic number', () => {
    expect(sheet.atomicNumber).to.equal(13);
  });

  it('has an atomic mass', () => {
    expect(sheet.atomicMass).to.equal(26.981539);
  });

  it('has an atomic symbol', () => {
    expect(sheet.atomicSymbol).to.equal('Al');
  });
});
