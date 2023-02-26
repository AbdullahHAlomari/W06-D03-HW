import express, {Application, Request, response, Response} from 'express'
const app:Application = express()
import myData from './myData.json'

// GET data from API 
app.get("/", (req:Request, res:Response)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/8')
      .then(resp => resp.json())
      .then(json => res.send(json))
    
})

// POST data
app.post('/:id/:name', (req:Request, res:Response)=>{
  const id = req.params.id;
  const name = req.params.name;
  const newData:any = { id: id, name: name };
  myData.push(newData);
  res.json(myData);
});

// Update data
app.put('/:id/:name', (req:Request, res:Response)=>{
  const id = req.params.id;
  const newName = req.params.name;
  myData.forEach((item:any) => {
      if(item.id === id){
          item.name = newName;
      }
  });
  res.json(myData);
});

// Delete data
app.delete('/:id', (req:Request, res:Response)=>{
  const id = req.params.id;
  const data = myData.filter((item:any) => item.id !== id);
  res.json(data);
});




app.listen(3008,()=>console.log("Express started!"));