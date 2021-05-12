import { createServer } from 'miragejs';

export default function () {
  let arr = [{ id: '1', text: 'sitaraam' }];
  let users = [{ name: 'partabraj', age: 24 }];
  //   let users = [{ name: 'raghunathji', age: 24 }];

  createServer({
    routes() {
      this.namespace = '/fakeapi';
      this.get('/getTodos', { todos: arr });
      this.get('/getUsers', { todos: users });
      this.post('/addTodos', (_, req) => {
        console.log('req', req);
        arr.push(req.requestBody);
      });
    },
  });
}
