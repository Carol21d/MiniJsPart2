
import {checkAge} from "../src/scripts/Exercise1.js";

describe.skip('if person is older 18 can drive', () => {
    test('should be older 18', () =>{
        //Given
        let age = 21;
    //When
    const result = checkAge(age);
    //Then
      expect(result).toBe(21)
    });
});