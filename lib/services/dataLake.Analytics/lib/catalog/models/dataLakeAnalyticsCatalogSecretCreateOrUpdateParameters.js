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
 * Initializes a new instance of the DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters class.
 * @constructor
 * Data Lake Analytics catalog secret creation and update parameters. This is
 * deprecated and will be removed in the next release. Please use
 * DataLakeAnalyticsCatalogCredentialCreateOrUpdateParameters instead.
 *
 * @member {string} password the password for the secret to pass in
 *
 * @member {string} [uri] the URI identifier for the secret in the format
 * <hostname>:<port>
 *
 */
class DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters
   *
   * @returns {object} metadata of DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters',
      type: {
        name: 'Composite',
        className: 'DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters',
        modelProperties: {
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          uri: {
            required: false,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters;
