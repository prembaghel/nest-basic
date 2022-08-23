import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      //type: 'sqlite',
      type: 'mysql',
      port: 3306,
      
      // host: 'localhost',
      // username: 'root',
      // password: 'Sql@root123$',
      // database: 'EMPLOYEE',
      
      host: 'awseb-e-ck3n9vav3v-stack-awsebrdsdatabase-v2cpjxmmsrgn.cuxcfcofxlzj.ap-south-1.rds.amazonaws.com',
      username: 'premBaghel',
      password: 'ghantya123$',
      database: 'ebdb',
      
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      debug: true,
      logging: true,
   }), ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
