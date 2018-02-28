var recipes = {};
<<<<<<< HEAD
//var obj = {prop: 1};
function updateObjectWithKeyAndValue (object, key, value) {

  return Object.assign({}, object, {[key] : value});
=======
var obj = {prop: 1};
function updateObjectWithKeyAndValue (object, key, value) {

  return Object.assign({}, obj, {[key] : value});
>>>>>>> e54a4ca8679931ba0aa0297feb829db482d0aec0

}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

<<<<<<< HEAD
function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
=======
function deleteFromObjectByKey(object, key, value) {
  delete object.key;
  return obj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
>>>>>>> e54a4ca8679931ba0aa0297feb829db482d0aec0
}
