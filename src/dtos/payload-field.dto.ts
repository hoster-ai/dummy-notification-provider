import { ApiResponseProperty } from '@nestjs/swagger';
import { LabelTypeEnum } from '../enums/label.type.enum';

export class PayloadFieldDto {
  id: string;

  @ApiResponseProperty({ type: String })
  label: string;

  @ApiResponseProperty()
  value: string | number | { [key: string]: string };

  @ApiResponseProperty({ enum: LabelTypeEnum })
  type: LabelTypeEnum;

  @ApiResponseProperty({ type: Boolean })
  required: boolean;

  @ApiResponseProperty({ type: Boolean })
  disabled = false;

  @ApiResponseProperty({ type: Boolean })
  hidden = false;

  @ApiResponseProperty({ type: RegExp })
  regexValidation: RegExp;

  @ApiResponseProperty({ type: Boolean })
  remoteValidation: boolean;

  @ApiResponseProperty({ type: String })
  error?: string;

  @ApiResponseProperty({ type: String })
  hint?: string;
}
