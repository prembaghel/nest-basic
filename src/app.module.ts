import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',    
      synchronize: true,  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
   }), ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
