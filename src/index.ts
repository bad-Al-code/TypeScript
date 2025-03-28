import { error } from 'console';
import { consumers } from 'stream';
import { promise } from 'zod';
import { fetchRecord } from './lib/registry';

interface Car {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}

function printCar(car: Car) {
  let str = `${car.make} ${car.model} ${car.year}`;

  if (typeof car.chargeVoltage !== 'undefined')
    str += `// ${car.chargeVoltage}v`;

  console.log(str);
}

printCar({
  make: 'Tesla',
  model: 'Model 4',
  year: 2025,
  chargeVoltage: 220,
});

interface Phone {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
}

const phones: Phone = {
  home: { country: '+91', area: '110021', number: '912-123-1233' },
  work: { country: '+91', area: '210021', number: '912-123-1233' },
  fax: { country: '+91', area: '1230021', number: '912-123-1233' },
};

console.log(phones.work.area);

// Tuples
let myCar = [2020, 'Tesla', 'CarName'];
const [year, make, model] = myCar;

type OneThroughFive = 1 | 2 | 3 | 4 | 5;
type Even = 2 | 4 | 6 | 8;

let evenOrLowNumber = 5 as Even | OneThroughFive;

function flipCoins() {
  if (Math.random() > 0.5) return 'heads';
  return 'tails';
}

const coinOutcome = flipCoins();

const success = ['success', { name: 'Al', email: 'al@al.com' }] as const;
const fail = ['error', new Error('Something went wrong')] as const;

function maybeGetUserInfo() {
  if (flipCoins() === 'heads') {
    return success;
  } else {
    return fail;
  }
}

const outcome2 = maybeGetUserInfo();
const [first, second] = outcome2;

if (second instanceof Error) {
  second;
} else {
  second;
}

/**
 * Types:
 *  - defines a more meanigful name for this type
 *  - decalre the sha[pe of the type in a single place
 *  - import and exprt this type from modules, the same as if it were an importable/exportable value
 */

type Amount = { currency: string; value: number };

function printAmount(amt: Amount) {
  console.log(amt);

  const { currency, value } = amt;
  console.log(`${currency} : ${value}`);
}

const donation = {
  currency: 'INR',
  value: 120,
  description: "I have't decided yet",
};

printAmount(donation);

type UserInfoOutcomeError = readonly ['error', Error];
type UserInfoOutcomeSuccess = readonly [
  'success',
  { readonly name: string; readonly email: string },
];

type UserInfoOutCome = UserInfoOutcomeError | UserInfoOutcomeSuccess;

function maybeGetUserInfo2(): UserInfoOutCome {
  if (flipCoins() === 'heads') {
    return success;
  } else {
    return fail;
  }
}

/** Interface */
interface Animal {
  isAlive(): boolean;
}
interface Mammel extends Animal {
  getFurOrHairColor(): string;
}
interface Hamster extends Mammel {
  squeak(): string;
}

function careForHamster(h: Hamster) {
  h.getFurOrHairColor();
  h.squeak();
}

interface AnimalLike {
  eat(food): void;
}

function consumeFood(food) {}

class Dog implements AnimalLike {
  eat() {
    consumeFood(food);
  }
  bark() {
    return 'woof';
  }
}

class LivingOrganism {
  isAlive() {
    return true;
  }
}

interface AnimalLike {
  eat(food): void;
}

interface CanBark {
  bark(): string;
}

class Dog2 extends LivingOrganism implements AnimalLike, CanBark {
  eat(food) {
    consumeFood(food);
  }
  bark(): string {
    return 'woof';
  }
}

type DatePropertyNames = keyof Date;

async function main() {
  const apiResponse = await Promise.all([
    fetch('https://google.com'),
    Promise.resolve('Google'),
  ]);

  type ApiResponseType = typeof apiResponse;
}

const MyAjaxConstructor = CSSRule;
CSSRule.STYLE_RULE;
const myAjax = new CSSRule();

interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car['color' | 'year'];

fetchRecord('magazine', 'asdasd');
