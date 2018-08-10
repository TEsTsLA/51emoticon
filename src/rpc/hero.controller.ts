import {
    ClientProxy,
    Client,
    MessagePattern,
    GrpcMethod,
    ClientGrpc,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcClientOptions } from './grpc-client.options';
export interface Hero {
    id: number;
    name: string;
}
export interface HeroById {
    id: number;
}
import { Get, OnModuleInit, Controller } from '@nestjs/common';

interface HeroService {
    findOne(data: { id: number }): Observable<any>;
}

@Controller('hero-rpc')
export class HeroController implements OnModuleInit {
    @Client(grpcClientOptions) private readonly client: ClientGrpc;
    private heroService: HeroService;

    onModuleInit() {
        this.heroService = this.client.getService<HeroService>('HeroService');
    }

    @Get('call')
    call(): Observable<any> {
        return this.heroService.findOne({ id: 1 });
    }

    @GrpcMethod('HeroService')
    findOne(data: HeroById): Hero {
        const items: Hero[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
        return items.find(({ id }) => id === data.id);
    }
}