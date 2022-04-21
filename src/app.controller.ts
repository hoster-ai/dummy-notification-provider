/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  Body,
  UseGuards,
  UseFilters,
  Get,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { RequestDto } from './dtos/data.request.dto';
import { InfoResponseDto } from './dtos/responses.dto';
import { LabelTypeEnum } from './enums/label.type.enum';
import { ApiExceptionFilter } from './exception.filter';
import { request } from 'http';
import { ActionFieldDto } from './dtos/action-field.dto';

@Controller()
@ApiTags('notification-provider')
@UseFilters(new ApiExceptionFilter())
@UseGuards(AuthGuard('bearer'))
@ApiBearerAuth()
@ApiUnauthorizedResponse({ status: 401, description: 'Unauthorized' })
export class AppController {
  @Get('info')
  @HttpCode(200)
  async info(): Promise<InfoResponseDto> {
    const emailField: ActionFieldDto = {
      id: 'subject',
      label: 'Subject',
      value: 'subject',
      type: LabelTypeEnum.TEXT_BOX,
      required: true,
      disabled: false,
      hidden: false,
      regexValidation: '/./',
      remoteValidation: false,
    };

    const bodyField: ActionFieldDto = {
      id: 'body',
      label: 'Body',
      value: 'body',
      type: LabelTypeEnum.TEXT_BOX,
      required: true,
      disabled: false,
      hidden: false,
      regexValidation: '/./',
      remoteValidation: false,
    };

    const sender_name: ActionFieldDto = {
      id: 'sender_name',
      label: 'Sender name',
      value: 'senderName',
      type: LabelTypeEnum.TEXT_BOX,
      required: true,
      disabled: false,
      hidden: false,
      regexValidation: '/./',
      remoteValidation: false,
    };

    const sender_email: ActionFieldDto = {
      id: 'sender_email',
      label: 'Sender email',
      value: 'senderEmail',
      type: LabelTypeEnum.TEXT_BOX,
      required: true,
      disabled: false,
      hidden: false,
      regexValidation: '/^[^@s]+@[^@s]+.[^@s]+$/',
      remoteValidation: false,
    };

    const receiver_email: ActionFieldDto = {
      id: 'receiver_email',
      label: 'Receiver email',
      value: 'receiverEmail',
      type: LabelTypeEnum.TEXT_BOX,
      required: true,
      disabled: false,
      hidden: false,
      regexValidation: '/^[^@s]+@[^@s]+.[^@s]+$/',
      remoteValidation: false,
    };

    const email_host_setting: ActionFieldDto = {
      id: 'email_host',
      label: 'Email host',
      value: 'emailHost',
      type: LabelTypeEnum.TEXT_BOX,
      required: false,
      disabled: false,
      hidden: false,
      regexValidation: '/./',
      remoteValidation: false,
    };

    const username_setting: ActionFieldDto = {
      id: 'username',
      label: 'username',
      value: 'username',
      type: LabelTypeEnum.TEXT_BOX,
      required: false,
      disabled: false,
      hidden: false,
      regexValidation: '/./',
      remoteValidation: false,
    };

    const use_ssl_setting: ActionFieldDto = {
      id: 'use_ssl',
      label: 'Use SSL',
      value: 'useSsl',
      type: LabelTypeEnum.CHECKBOX,
      required: false,
      disabled: false,
      hidden: false,
      regexValidation: '/./',
      remoteValidation: false,
    };

    return {
      code: 200,
      message: 'Success',
      info: {
        name: '',
        actionFields: [
          emailField,
          bodyField,
          sender_email,
          sender_name,
          receiver_email,
        ],
        settings: [
          { label: 'smtp_port', url: '' },
          { label: 'use_ssl', url: '' },
          { label: 'username', url: '' },
        ],
      },
    };
  }

  /**
   * @param requestBody RequestDto
   * @returns Promise with ResponseDto
   */
  @ApiBody({ type: RequestDto })
  @ApiOkResponse()
  @Post('send')
  @HttpCode(200)
  async send(@Body() requestBody: RequestDto): Promise<any> {
    if (
      requestBody.payload.receiver_email.includes('error') ||
      requestBody.payload.sender_email.includes('error') ||
      requestBody.payload.body.includes('error') ||
      requestBody.payload.sender_name.includes('error') ||
      requestBody.payload.subject.includes('error')
    ) {
      throw new BadRequestException('Something went wrong');
    }

    return {
      code: 200,
      message: 'Success',
    };
  }
}
