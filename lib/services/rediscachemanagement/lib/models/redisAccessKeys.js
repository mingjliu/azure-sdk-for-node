/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the RedisAccessKeys class.
 * @constructor
 * Redis cache access keys.
 * @member {string} [primaryKey] The current primary key that clients can use
 * to authenticate with redis cache.
 * 
 * @member {string} [secondaryKey] The current secondary key that clients can
 * use to authenticate with redis cache.
 * 
 */
function RedisAccessKeys(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.primaryKey !== undefined) {
      this.primaryKey = parameters.primaryKey;
    }
    if (parameters.secondaryKey !== undefined) {
      this.secondaryKey = parameters.secondaryKey;
    }
  }    
}


/**
 * Validate the payload against the RedisAccessKeys schema
 *
 * @param {JSON} payload
 *
 */
RedisAccessKeys.prototype.serialize = function () {
  var payload = {};
  if (this['primaryKey'] !== null && this['primaryKey'] !== undefined) {
    if (typeof this['primaryKey'].valueOf() !== 'string') {
      throw new Error('this[\'primaryKey\'] must be of type string.');
    }
    payload['primaryKey'] = this['primaryKey'];
  }

  if (this['secondaryKey'] !== null && this['secondaryKey'] !== undefined) {
    if (typeof this['secondaryKey'].valueOf() !== 'string') {
      throw new Error('this[\'secondaryKey\'] must be of type string.');
    }
    payload['secondaryKey'] = this['secondaryKey'];
  }

  return payload;
};

/**
 * Deserialize the instance to RedisAccessKeys schema
 *
 * @param {JSON} instance
 *
 */
RedisAccessKeys.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['primaryKey'] !== undefined) {
      this['primaryKey'] = instance['primaryKey'];
    }

    if (instance['secondaryKey'] !== undefined) {
      this['secondaryKey'] = instance['secondaryKey'];
    }
  }

  return this;
};

module.exports = RedisAccessKeys;