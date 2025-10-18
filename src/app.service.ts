import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public list(): string[] {
        return ['Hello World!'];
    }

    public find(id:Number) {
        return null;
    }
}
