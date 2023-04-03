import { Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [TokensService],
  imports: [JwtModule],
  exports: [TokensService],
})
export class TokensModule {}
