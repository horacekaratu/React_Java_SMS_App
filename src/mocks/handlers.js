import { rest } from 'msw';
export const handlers= [
  
  rest.get('https://api.example.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        
        { id: 1,message: 'hello john' },
         { id: 2, message: 'hello lorem' },
        
        
        
        ])
    );
  }),
  rest.get('https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg', async (req, res, ctx) => {
    // Forward the request to the actual server
    
    return ctx.fetch(req);
  }),
];
