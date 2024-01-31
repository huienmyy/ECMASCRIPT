/** Mục đích 
 * Import từ file export
 * gọi hàm, class, biến
*/

/** Bài 1,2 */
import * as stringFunctions  from './export.js';

console.log(stringFunctions.upperCaseString('hello'));
console.log(stringFunctions.lowerCaseString('WORLD!'));


/** Bài 3, 4 */
import { subtract } from './bai3.js';
console.log(subtract(7,4));

/** Bài thêm */
import demoAPI from './module/test/testAPI.js';
console.log("Bài thêm:");
demoAPI();