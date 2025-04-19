import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactMessage } from './contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactMessage)
    private readonly contactRepo: Repository<ContactMessage>,
  ) {}

  create(createContactDto: CreateContactDto): Promise<ContactMessage> {
    const msg = this.contactRepo.create(createContactDto);
    return this.contactRepo.save(msg);
  }
}
