import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateElectionDto } from './dto/create-election.dto';

@Injectable()
export class ElectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createElectionDto: CreateElectionDto) {
    return this.prisma.election.create({
      data: {
        organizationId: createElectionDto.organizationId,
        title: createElectionDto.title,
        description: createElectionDto.description,
        startDate: new Date(createElectionDto.startDate),
        endDate: new Date(createElectionDto.endDate),
        status: createElectionDto.status,
      },
      include: {
        organization: true,
      },
    });
  }

  async findAll() {
    return this.prisma.election.findMany({
      include: {
        organization: true,
      },
      orderBy: {
        startDate: 'desc',
      },
    });
  }
}
