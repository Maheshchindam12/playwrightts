import * as dotenv from 'dotenv';
import * as path from 'path';

const environment = (process.env.TEST_ENV || 'dev').toLowerCase().trim();
const envFileName = `${environment}.env`;
const envPath = path.resolve(__dirname, '../config', envFileName);

const result = dotenv.config({
  path: envPath,
  override: true,
});

if (result.error) {
  console.warn(`Could not load ${envFileName}. Falling back to default values.`);
}

const getEnvValue = (key: string, fallback: string) => process.env[key] || fallback;

export const env = {
  environment,
  baseUrl: getEnvValue('BASE_URL', 'https://www.saucedemo.com'),
  username: getEnvValue('USERNAME', 'standard_user'),
  password: getEnvValue('PASSWORD', 'secret_sauce'),
  invalidUsername: getEnvValue('INVALID_USERNAME', 'locked_out_user'),
  invalidPassword: getEnvValue('INVALID_PASSWORD', 'wrong_password'),
};