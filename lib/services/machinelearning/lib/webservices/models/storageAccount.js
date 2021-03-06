/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * Access information for a storage account.
 *
 * @member {string} [name] Specifies the name of the storage account.
 *
 * @member {string} [key] Specifies the key used to access the storage account.
 *
 */
class StorageAccount {
  constructor() {
  }

  /**
   * Defines the metadata of StorageAccount
   *
   * @returns {object} metadata of StorageAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageAccount',
      type: {
        name: 'Composite',
        className: 'StorageAccount',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageAccount;
