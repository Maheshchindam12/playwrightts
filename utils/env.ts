import * as dotenv from 'dotenv';

const environment =
    process.env.TEST_ENV || 'dev';

dotenv.config({
    path: `./config/${environment}.env`
});

export const env = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  invalidUsername: process.env.INVALID_USERNAME!,
  invalidPassword: process.env.INVALID_PASSWORD!,
};