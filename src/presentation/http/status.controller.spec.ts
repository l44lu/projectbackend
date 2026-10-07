import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller.js';
import { GetStatusUseCase } from '../../application/status/get-status.use-case.js';

describe('StatusController', () => {
  let statusController: StatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      providers: [
        {
          provide: GetStatusUseCase,
          useClass: GetStatusUseCase,
        },
      ],
    }).compile();

    statusController = module.get<StatusController>(StatusController);
  });

  describe('getStatus', () => {
    it('should return status ok and a valid timestamp', () => {
      const result = statusController.getStatus();
      expect(result).toBeDefined();
      expect(result.status).toBe('ok');
      expect(typeof result.timestamp).toBe('string');
      expect(!isNaN(Date.parse(result.timestamp))).toBe(true);
    });
  });
});
