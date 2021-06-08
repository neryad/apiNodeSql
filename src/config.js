import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_Password || '',
  dbServer: process.env.DB_Server || '',
  dbDatabase: process.env.DB_Database || '',
};
