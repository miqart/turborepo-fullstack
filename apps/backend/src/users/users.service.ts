import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return [
      { id: 1, name: 'John Doe', email: 'john@test.com' },
      { id: 2, name: 'Alex Pato', email: 'alex@test.com' },
      { id: 3, name: 'Cristiano Ronaldo', email: 'ronaldo@test.com' },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
