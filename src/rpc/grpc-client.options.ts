import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    // protoPath: join(__dirname, './hero.proto'),
    protoPath: 'E:\\51emoticon\\src\\rpc\\hero.proto'
  },
};