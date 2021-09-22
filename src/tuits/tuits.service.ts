import { Injectable } from '@nestjs/common';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
  private tuits: Tuit[] = [
    {
      id: '1',
      message: 'Hello world from Nest.js 😻',
    },
  ];

  getTuits(): Tuit[] {
    return this.tuits;
  }
}
