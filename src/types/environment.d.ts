export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: string
      SERVER_PORT?: number
      MONGO_PROTOCOL: string
      MONGO_DATABASE: string
      MONGO_PORT?: number
      MONGO_USER: string
      MONGO_PASSWORD: string
      MONGO_PARAMS: string
      MONGO_HOST: string
    }
  }
}
