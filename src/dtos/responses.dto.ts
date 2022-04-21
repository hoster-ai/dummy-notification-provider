import { ApiResponseProperty } from '@nestjs/swagger';
import { PayloadFieldDto } from './payload-field.dto';
import { ProviderInfoDto } from './provider-info.response.dto';

class BaseResponse {
  @ApiResponseProperty({
    type: Number,
    example: 200,
  })
  code: number;

  @ApiResponseProperty({
    type: String,
    example: 'Ok',
  })
  message: string;
}

export class InfoResponseDto extends BaseResponse {
  @ApiResponseProperty({
    type: ProviderInfoDto,
  })
  info: ProviderInfoDto;
}

export class ErrorResponseDto extends BaseResponse {
  @ApiResponseProperty({
    example: 'Not implemented',
  })
  errors?: string[] | string;
}

export class ActionFieldsValidationResponse extends BaseResponse {
  @ApiResponseProperty({
    type: [PayloadFieldDto],
  })
  actionFields?: PayloadFieldDto[];
}
