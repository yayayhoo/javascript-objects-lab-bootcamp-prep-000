var recipes = {'a':2};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var copy = Object.object({}, obj);

  copy[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.object({}, obj);
  delete copy[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var copy = object;
  delete copy[key];
  return copy;
}
