const test = require('tape');
const todo = require('../logic.js');

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
