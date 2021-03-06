/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the BgpPeerStatusListResult class.
 * @constructor
 * Response for list BGP peer status API service call
 *
 * @member {array} [value] List of BGP peers
 *
 */
class BgpPeerStatusListResult {
  constructor() {
  }

  /**
   * Defines the metadata of BgpPeerStatusListResult
   *
   * @returns {object} metadata of BgpPeerStatusListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BgpPeerStatusListResult',
      type: {
        name: 'Composite',
        className: 'BgpPeerStatusListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BgpPeerStatusElementType',
                  type: {
                    name: 'Composite',
                    className: 'BgpPeerStatus'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = BgpPeerStatusListResult;
