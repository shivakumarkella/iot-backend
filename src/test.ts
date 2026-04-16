import { handler } from './handler';
import * as fs from 'fs';

const event = JSON.parse(fs.readFileSync('./event.json', 'utf-8'));

handler(event).then(result => {
  console.log('Lambda result:', result);
}).catch(error => {
  console.error('Error:', error);
});