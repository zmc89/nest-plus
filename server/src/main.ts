import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    cors: true, // 开启跨域访问
  })
  /** 全局验证 */
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  /** 配置项 */
  const config = app.get(ConfigService);
  /** 端口 */
  const port = config.get<number>('app.port') || 8080;
  await app.listen(port);
}
bootstrap();
