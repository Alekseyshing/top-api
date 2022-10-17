import { Injectable } from '@nestjs/common';
import { format } from 'date-fns'
import { FileElementResponse } from './dto/File-element-response.response';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { MFile } from './mfile.class';

@Injectable()
export class FilesService {
  async saveFiles(files: MFile[]): Promise<FileElementResponse[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);

    const res: FileElementResponse[] = [];

    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      res.push({ url: `/uploads/${dateFolder}/${file.originalname}`, name: file.originalname });
    }

    return res;
  }
}
