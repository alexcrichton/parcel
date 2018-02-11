import { add_one } from './add.wasm';

const add_two = import('./add2.js');

output(add_one());
