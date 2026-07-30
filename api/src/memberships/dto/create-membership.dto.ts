import { IsString } from 'class-validator';

export class CreateMembershipDto {
  @IsString()
  membershipNumber!: string;

  @IsString()
  organizationId!: string;

  @IsString()
  userId!: string;

  @IsString()
  status!: string;
}
