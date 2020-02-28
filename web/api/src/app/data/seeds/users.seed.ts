import bcrypt from 'bcrypt';

export const seedUsers: { [key: string]: any }[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    username: 'admin',
    password: bcrypt.hashSync('admin', 8),
    roles: [
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'ADMIN',
      },
      {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'USER',
      },
    ],
  },
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    username: 'user',
    password: bcrypt.hashSync('user', 8),
    roles: [
      {
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'USER',
      },
    ],
  },
];
