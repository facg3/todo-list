const test = require('tape');
const todo = require('../logic.js');

//Testing addTodo
const list = [
    { id: 0, description: '1st', done: false},
    { id: 1, description: '2nd', done: false},
    { id: 2, description: '3d', done: false},
    { id: 3, description: '4th', done: true},
    { id: 4, description: '5th', done: false}
];


//testing mark
test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;

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

test('tape is working', function(t) {
  const actual =   todo.addTodo([], "make tea");
  const expected = [{id: 1,
		   description: "make tea",
		   done: false}];
  t.deepEqual(actual, expected, 'e3mal shay');
  t.end();
})

test('tape is working', function(t) {
  const actual =   todo.addTodo([{id: 1,
		   description: "make tea",
		   done: false}], "make coffee");
  const expected = [{id: 1,
		   description: "make tea",
		   done: false},
		   {id: 2,
		   description: "make coffee",
		   done: false}];
  t.deepEqual(actual, expected, 'e3mal gahwa');
  t.end();
})


test('tape is working', function(t) {
  const actual =   todo.addTodo([{id: 1,
		   description: "make tea",
		   done: false},
		   {id: 2,
		   description: "make coffee",
		   done: false}], "make nescafe");
  const expected = [{id: 1,
		   description: "make tea",
		   done: false},
		   {id: 2,
		   description: "make coffee",
		   done: false},
		   {id: 3,
		   description: "make nescafe",
		   done: false}
];
  t.deepEqual(actual, expected, 'e3mal eshi zaki');

  t.end();
})

//Testing deleteTodo

test('tape is working', function(t) {
  const actual =   todo.deleteTodo([{id: 1,
		   description: "make tea",
		   done: false},
		   {id: 2,
		   description: "make coffee",
		   done: false}], 2);
  const expected = [{id: 1,
		   description: "make tea",
		   done: false}
];
  t.deepEqual(actual, expected, 'delete coffee');
  t.end();
})



test('tape is working', function(t) {
  const actual =   todo.deleteTodo([{id: 1,
		   description: "make tea",
		   done: false}], 1);
  const expected = [];
  t.deepEqual(actual, expected, 'delete tea');
  t.end();
})



test('tape is working', function(t) {
  const actual =   todo.deleteTodo([], 1);
  const expected = [];
  t.deepEqual(actual, expected, 'delete nothing, from nothing.');
  t.end();
})

})
