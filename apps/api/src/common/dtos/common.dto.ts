import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator'

export class BaseQueryDto {
  @IsNumberString()
  @IsOptional()
  skip?: number

  @IsNumberString()
  @IsOptional()
  take?: number

  @IsOptional()
  @IsIn(['asc', 'desc'])
  order?: 'asc' | 'desc'

  @IsString()
  @IsOptional()
  search?: string
}
