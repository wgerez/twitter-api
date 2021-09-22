import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  getTuits(): Tuit[] {
    return this.tuitService.getTuits();
  }

  /*@Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { searchTerm, orderBy } = filterQuery;
    return this.tuitService.getTuits();
  }*/

  @Get(':id')
  getTuit(@Param('id') id: string): string {
    return `Your tuit id is ${id}`;
  }

  @Post()
  createTuit(@Body('message') message: string): string {
    return `Your tuit was ${message}`;
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit): string {
    return `The tuit ${id} has been updated`;
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: string): string {
    return `The tuit ${id} has been delete`;
  }
}
