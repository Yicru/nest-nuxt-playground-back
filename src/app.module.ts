import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
