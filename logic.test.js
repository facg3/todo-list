const test = require('tape');
const todo = require('./logic.js');


const list = [
    { id: 0, description: '1st', done: false},
    { id: 1, description: '2nd', done: false},
    { id: 2, description: '3d', done: false},
    { id: 3, description: '4th', done: true},
    { id: 4, description: '5th', done: false}
];


test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;
//  t.equals(actual, expected, '1=1');
  //t.equals(2,1, '2!=1');
  t.deepEqual( todo.markTodo(list, 1),
	    [
    { id: 0, description: '1st', done: false},
    { id: 1, description: '2nd', done: true},
    { id: 2, description: '3d', done: false},
    { id: 3, description: '4th', done: true},
    { id: 4, description: '5th', done: false}
], 'id 1 should become true');
    
    t.deepEqual( todo.markTodo(list, 4),
               [
    { id: 0, description: '1st', done: false},
    { id: 1, description: '2nd', done: false},
    { id: 2, description: '3d', done: false},
    { id: 3, description: '4th', done: true},
    { id: 4, description: '5th', done: true}
], 'id 3 should become false');
    
    t.deepEqual( todo.markTodo(list, 0),
               [
    { id: 0, description: '1st', done: true},
    { id: 1, description: '2nd', done: false},
    { id: 2, description: '3d', done: false},
    { id: 3, description: '4th', done: true},
    { id: 4, description: '5th', done: false}
], 'id 0 should become true');
    
    t.deepEqual( todo.markTodo(list, 3),
               [
    { id: 0, description: '1st', done: false},
    { id: 1, description: '2nd', done: false},
    { id: 2, description: '3d', done: false},
    { id: 3, description: '4th', done: false},
    { id: 4, description: '5th', done: false}
], 'id 3 should become false');
  t.end();
})
