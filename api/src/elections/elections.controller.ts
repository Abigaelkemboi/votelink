import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ElectionsService } from './elections.service';
import { CreateElectionDto } from './dto/create-election.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('elections')
export class ElectionsController {
  constructor(private readonly electionsService: ElectionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createElectionDto: CreateElectionDto) {
    return this.electionsService.create(createElectionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.electionsService.findAll();
  }
}
