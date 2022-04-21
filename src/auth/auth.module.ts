import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { BearerStrategy } from './bearer.strategy';
@Module({
  imports: [PassportModule.register({ defaultStrategy: 'bearer' })],
  controllers: [],
  providers: [BearerStrategy],
  exports: [BearerStrategy],
})
export class AuthModule {}
