import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: registerDto.email },
          { phone: registerDto.phone },
          { nationalId: registerDto.nationalId },
        ],
      },
    });

    if (existingUser) {
      throw new ConflictException(
        'Email, phone number, or national ID is already registered.',
      );
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 12);

    const user = await this.prisma.user.create({
      data: {
        firstName: registerDto.firstName,
        lastName: registerDto.lastName,
        email: registerDto.email,
        phone: registerDto.phone,
        nationalId: registerDto.nationalId,
        passwordHash: hashedPassword,
      },
    });

    return {
      message: 'Registration successful.',
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    };
  }
}
