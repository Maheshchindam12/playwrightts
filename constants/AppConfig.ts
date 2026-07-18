import { env } from '../utils/env';

export class AppConfig {
    static readonly environment = env.environment;
    static readonly baseURL = env.baseUrl;
    static readonly username = env.username;
    static readonly password = env.password;
    static readonly invalidUsername = env.invalidUsername;
    static readonly invalidPassword = env.invalidPassword;
    static readonly apiUrl = env.apiUrl;    
}