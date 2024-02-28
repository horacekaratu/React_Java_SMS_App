import { rest } from 'msw';
export const handlers= [
  rest.get('https://api.example.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        
        { id: 1,message: 'hello john' },
         { id: 2, message: 'hello lorem' },
         { id: 3,message: 'hello john' },
         { id: 4, message: 'hello lorem' },
         { id: 5,message: 'hello john' },
         { id: 6, message: 'hello lorem' },
         { id: 7, message: 'hello lorem' }
        
        
        
        ])
    );
  })
];
