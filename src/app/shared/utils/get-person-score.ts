import { Person } from '../models/person.interface';

const IMCOME_MULTIPLIER = 1.5;
const FIRST_LETTER = 'a';
const FIRST_LETTER_POSITION = FIRST_LETTER.charCodeAt(0);

export function getScore(person: Person): number {
  return person.income * IMCOME_MULTIPLIER + calculateStringScore(person.firstName);
}

function calculateStringScore(string: string): number {
  return string.toLowerCase().split('').reduce(
    (agg, letter) => agg + letter.charCodeAt(0) - FIRST_LETTER_POSITION + 1, 
    0
  );
}
