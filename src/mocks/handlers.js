import { rest } from 'msw';
export const contacts=[
        
  { id: 1,name: 'Fischer', number:'071771143', country:"Iceland" },
  { id: 2,name: 'Topalov', number:'071771153', country:"Portugal" },
  { id: 3,name: 'Kramnik', number:'071771163' , country: "Turkiye"},
  
  
  
  ]
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
  rest.get('https://api.example.com/contacts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(contacts)
    );
  }),
  
  rest.get('https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg', async (req, res, ctx) => {
    // Forward the request to the actual server
    
    return ctx.fetch(req);
  }),
];
