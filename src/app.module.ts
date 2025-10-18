import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { AuthModule } from './auth/auth.module';
import { OwnersModule } from './owners/owners.module';

@Module({
    imports: [PetsModule, AuthModule, OwnersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
