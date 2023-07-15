import 'dotenv/config'
import express from 'express'
import { sequelize } from './database/database'
import router from './router/router'

class App {
  public express: express.Application

  constructor() {
    this.express = express()
    this.database()
    this.router()
  }

  public async database(): Promise<void> {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully');
    } catch (err) {
      console.error('Unable to connect to the database', err)
    }
  }

  private router(): void {
    this.express.use(router)
  }
}

export default new App().express