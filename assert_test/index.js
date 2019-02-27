const assert = require('assert');

// assert.ok()的别名
// assert(1===2, 'this is an error');

// const obj1 = {
//     a: {
//         b: 1
//     }
// };
// const obj2 = {
//     a: {
//         b: 2
//     }
// };
// const obj3 = {
//     a: {
//         b: 1
//     }
// };
// const obj4 = Object.create(obj1);
// console.log(obj4)

// assert.deepEqual(obj1, obj4); 

var promise = new Promise(function (resolve, reject) {
    resolve(1)
}).then(function (r) {
}).catch(function (reason) {
    
});

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         reject('失败，Promise-rejected');
//     }, 2000);
// });

// assert.doesNotReject(promise, SyntaxError);

// assert.doesNotThrow(() => {
//     throw new TypeError('错误值');
// },TypeError);

// assert.fail();
// AssertionError [ERR_ASSERTION]: Failed

// assert.fail('失败');
// AssertionError [ERR_ASSERTION]: 失败

// assert.fail(new TypeError('需要数组'));
// TypeError: 需要数组

// assert.ifError(undefined);
// 通过。
// assert.ifError(0);
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 0
// assert.ifError('错误');
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: '错误'
// assert.ifError(new Error());

// assert.notDeepStrictEqual({ a: 1 }, { a: 1 });

// assert.rejects(promise, SyntaxError);

assert.strictEqual(1, 1);
// OK

assert.strictEqual(1, '1');