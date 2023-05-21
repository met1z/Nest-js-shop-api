import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan123' })
  parrword: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        password: 'ivan123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in!' })
  msq: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$j3KBqMNZdvlGfXRVM5uvm.wMqy63Qnx7Q9aoNjE7qJcyWWgPbz4Hy',
  })
  password: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-05-18T18:41:40.837Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-05-18T18:41:40.837Z' })
  createdAt: string;
}
