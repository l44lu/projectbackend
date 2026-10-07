import { Controller, Get } from '@nestjs/common';
import { GetStatusUseCase } from '../../application/status/get-status.use-case.js';
import type { StatusResultDto } from '../../application/status/status-result.dto.js';

@Controller()
export class StatusController {
  constructor(private readonly getStatusUseCase: GetStatusUseCase) {}

  @Get()
  getStatus(): StatusResultDto {
    return this.getStatusUseCase.execute();
  }
}
