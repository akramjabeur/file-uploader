import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'upload',
    }),
  )
  @Post()
  async uploadFile(@UploadedFile() uploadedFile: any): Promise<any> {
    // await this.sleep(3000);
    return Promise.resolve(uploadedFile);
  }
}
