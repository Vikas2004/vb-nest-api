import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [QuestModule, TeamModule, UserModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'test.db',
    synchronize: true,
    entities: [User],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
