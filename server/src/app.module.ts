import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    /** 项目配置config */
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load:[configuration]
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
