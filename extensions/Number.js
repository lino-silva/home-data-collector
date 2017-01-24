'use strict';

const tryParse = (obj, cb) => {
  let number = null;

  try {
    number = parseInt(obj);
  } catch (err) {
    if (cb) cb(null, err);
    else return null;
  }

  if (cb) cb(number, null);
  else return number;
}

exports.tryParse = tryParse;