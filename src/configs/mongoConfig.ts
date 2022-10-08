import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions()
  };
};

// admin:root @localhost: 27017 / admin

const getMongoString = (configService: ConfigService) =>
  'mongodb://admin:root@localhost:27017/admin'


// configService.get('MONGO_LOGIN') +
// ':' +
// configService.get('MONGO_PASSWORD') +
// '@' +
// configService.get('MONGO_HOST') +
// ':' +
// configService.get('MONGO_PORT') +
// '/' +
// configService.get('MONGO_AUTHDATABASE')



console.log(`${getMongoString}`);

const getMongoOptions = () => ({
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});


