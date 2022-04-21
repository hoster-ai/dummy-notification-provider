import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET - /info', async () => {
    return request(app.getHttpServer())
      .get('/info')
      .auth('test', { type: 'bearer' })
      .expect(200)
      .then((res) => {
        expect(res.body.info.actionFields.length).toBe(5);
      });
  });

  it('POST - /send', async () => {
    return request(app.getHttpServer())
      .post('/send')
      .send({
        payload: {
          subject: 'subject example',
          body: 'body example',
          sender_name: 'sender',
          sender_email: 'sender@email.com',
          receiver_email: 'receiver@email.com',
        },
      })
      .auth('test', { type: 'bearer' })
      .expect(200)
      .then((res) => {
        expect(res.body.code).toBe(200);
      });
  });

  it('POST - /send -- expect error', async () => {
    return request(app.getHttpServer())
      .post('/send')
      .send({
        payload: {
          subject: 'subject example',
          body: 'body example',
          sender_name: 'sender',
          sender_email: 'sender@email.com',
          receiver_email: 'receivererror@email.com',
        },
      })
      .auth('test', { type: 'bearer' })
      .then((res) => {
        expect(res.body.errors).toBe('Something went wrong');
      });
  });
});
