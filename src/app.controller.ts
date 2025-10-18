import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    public constructor(private readonly appService: AppService) {}

    @Get()
    public index(): string[] {
        return this.appService.list();
    }
    
    @Get('/find/:id')
    public find(id:Number): string {
        return this.appService.find(id);
    }

    @Post('/save')
    public save(id:Number): string {
        return this.appService.find(id);
    }

    @Put('/save')
    public update(id:Number): string {
        return this.appService.find(id);
    }

    @Delete('/save')
    public delete(id:Number): string {
        return this.appService.find(id);
    }


}
