import { Test, TestingModule } from '@nestjs/testing';
import { Firebird } from './firebird';

describe('Firebird', () => {
  let provider: Firebird;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Firebird],
    }).compile();

    provider = module.get<Firebird>(Firebird);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
