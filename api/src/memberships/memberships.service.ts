import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMembershipDto } from './dto/create-membership.dto';

@Injectable()
export class MembershipsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMembershipDto: CreateMembershipDto) {
    return this.prisma.membership.create({
      data: {
        membershipNumber: createMembershipDto.membershipNumber,
        organizationId: createMembershipDto.organizationId,
        userId: createMembershipDto.userId,
        status: createMembershipDto.status,
      },
      include: {
        user: true,
        organization: true,
      },
    });
  }

  async findAll() {
    return this.prisma.membership.findMany({
      include: {
        user: true,
        organization: true,
      },
    });
  }
}
