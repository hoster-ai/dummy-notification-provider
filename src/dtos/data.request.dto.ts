import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsObject, IsString } from 'class-validator';

class PayloadDto {
  @IsDefined()
  @IsString()
  @ApiProperty({ type: String, example: 'subject example' })
  subject: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ type: String, example: 'body example' })
  body: string;

  @IsDefined()
  @IsString()
  @ApiProperty({ type: String, example: 'sender' })
  sender_name: string;

  @IsDefined()
  @IsEmail()
  @ApiProperty({ type: String, example: 'sender@email.com' })
  sender_email: string;

  @IsDefined()
  @IsEmail()
  @ApiProperty({ type: String, example: 'receiver@email.com' })
  receiver_email: string;
}
export class RequestDto {
  @IsDefined()
  @IsObject()
  @ApiProperty({ type: PayloadDto })
  payload: PayloadDto;
}
