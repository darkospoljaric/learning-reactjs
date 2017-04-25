import deepFreeze  from 'deep-freeze';
import expect from 'expect';
import mainReducer from './reducers';

// const testMainReducer = () => {
it('checks edit book reducer', () => {
  const stateBefore = {
    books : [
      { id : 1,
        title: 'title1',
        author : 'author1' },
      { id : 2,
        title: 'title2',
        author : 'author2' },
      { id : 3,
        title: 'title3',
        author : 'author3' }]
  };
  const action = {
    type : 'EDIT_BOOK',
    id : 2,
    bookTitle : 'newTitle2'
  };
  const stateAfter = {
    books : [
      { id : 1,
        title: 'title1',
        author : 'author1' },
      { id : 2,
        title: 'newTitle2',
        author : 'author2' },
      { id : 3,
        title: 'title3',
        author : 'author3' }]
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    mainReducer (stateBefore, action)
  ).toEqual(stateAfter);

});
//
// testMainReducer();
// console.log("test passed!");
