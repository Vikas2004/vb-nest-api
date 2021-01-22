import { Injectable } from '@nestjs/common';
import { CreateQuestDto } from './dto/create-quest.dto';
import { UpdateQuestDto } from './dto/update-quest.dto';
import { QUESTS } from './quest.data';

@Injectable()
export class QuestService {
  quest = QUESTS;
  create(createQuestDto: CreateQuestDto) {
    return 'This action adds a new quest';
  }

  findAll() {
    return (this.quest);
  }

  findOne(id: number) {
    return `This action returns a #${id} quest`;
  }

  update(id: number, updateQuestDto: UpdateQuestDto) {
    return `This action updates a #${id} quest`;
  }

  remove(id: number) {
    return `This action removes a #${id} quest`;
  }
}
