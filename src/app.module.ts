import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ContactsModule,
  //   TypeOrmModule.forRoot({
  //     //type: 'sqlite',
  //     type: 'mysql',
  //     host: 'awseb-e-ck3n9vav3v-stack-awsebrdsdatabase-v2cpjxmmsrgn.cuxcfcofxlzj.ap-south-1.rds.amazonaws.com',
  //     port: 3306,
  //     username: 'premBaghel',
  //     password: 'ghantya123',
  //     database: 'employee',
  //     dropSchema: true,
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true,
  //     debug: true,
  //     logging: true,
  //  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
