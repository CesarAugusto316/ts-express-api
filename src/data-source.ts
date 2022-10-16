import 'reflect-metadata';
import { User } from './models/User';
import { DataSource } from 'typeorm';
import { configDb } from './config/configDb';


type ENV = 'development' | 'test' | 'production'
const env = configDb[process.env.NODE_ENV as ENV];

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: `postgres://${env.user}:${env.password}@${env.ip}:${env.port}`,
  database: env.database,
  synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [],
});

export const connectDb = async () => {
  AppDataSource.initialize()
    .then(res => {
      console.log(`[DB ⚡] ${res.options.database} running.`,);
    })
    .catch(err => {
      console.log(err);
    });
};
