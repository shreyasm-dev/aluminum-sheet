import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();

/**
 * A literal sheet of aluminum
 * 
 * @param width The width of the sheet in meters
 * @param height The height of the sheet in meters
 * 
 * @returns An aluminum sheet
 * 
 * @example
 * ```typescript
 * const sheet = new AluminumSheet(1, 1);
 * ```
 */
export default class AluminumSheet {
  constructor(public width: number, public height: number) {}

  /**
   * The area of the sheet in square meters
   */
  get area() {
    return this.width * this.height;
  }

  /**
   * The perimeter of the sheet in meters
   */
  get perimeter() {
    return 2 * (this.width + this.height);
  }

  /**
   * The density of aluminum in kg/m^3 (constant 2.7)
   */
  get density() {
    return 2.7;
  }

  /**
   * The mass of the sheet in kg
   */
  get mass() {
    return this.density * this.area;
  }

  /**
   * The weight of the sheet in Newtons
   */
  get weight() {
    return this.mass * 9.8;
  }

  /**
   * The atomic number of aluminum (constant 13)
   */
  get atomicNumber() {
    return 13;
  }

  /**
   * The atomic mass of aluminum (constant 26.981539)
   */
  get atomicMass() {
    return 26.981539;
  }

  /**
   * The atomic symbol of aluminum (constant 'Al')
   */
  get atomicSymbol() {
    return 'Al';
  }
}
