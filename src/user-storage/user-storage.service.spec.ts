import { Test, TestingModule } from '@nestjs/testing';
import { UserStorageService } from './user-storage.service';

describe('UserStarageService', () => {
  let service: UserStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserStorageService],
    }).compile();

    service = module.get<UserStorageService>(UserStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
