import { Module } from '@nestjs/common';
import { StatusController } from './presentation/http/status.controller.js';
import { GetStatusUseCase } from './application/status/get-status.use-case.js';

@Module({
  imports: [],
  controllers: [StatusController],
  providers: [
    {
      provide: GetStatusUseCase,
      useClass: GetStatusUseCase,
    },
  ],
})
export class AppModule {}

