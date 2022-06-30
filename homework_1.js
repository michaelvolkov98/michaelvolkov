/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Due date Jul-3
 */

let fTemp1 = 100;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

let fTemp2 = 100;
let kTemp1 = (fTemp2 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equals to ${kTemp1}K`)

let cTemp2 = 100;
let fTemp3 = (cTemp2 * 1.8 + 32);
console.log(`\n${cTemp2}°C is equals to ${fTemp3}°F`)

let cTemp3 = 100;
let kTemp2 = (cTemp3 + 273.15);
console.log(`\n${cTemp3}°C is equals to ${kTemp2}K`);

let kTemp3 = 100;
let fTemp4 = (kTemp3 * 9/5 - 459.67)
console.log(`\n${kTemp3}K is equals to ${fTemp4}°F`);

let kTemp4 = 100
let cTemp4 = (kTemp4) - 273.15
console.log(`\n${kTemp4}K is equals to ${cTemp4}°C`);
