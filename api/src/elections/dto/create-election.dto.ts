import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateElectionDto {
  @IsString()
  organizationId!: string;

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  startDate!: string;

  @IsDateString()
  endDate!: string;

  @IsString()
  status!: string;
}
