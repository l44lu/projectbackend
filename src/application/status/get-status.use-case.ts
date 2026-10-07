import { UseCase } from '../common/use-case.interface.js';
import { StatusResultDto } from './status-result.dto.js';

export class GetStatusUseCase implements UseCase<void, StatusResultDto> {
  execute(): StatusResultDto {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
