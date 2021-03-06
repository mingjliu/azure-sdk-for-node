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
 * Initializes a new instance of the EdifactSchemaReference class.
 * @constructor
 * The Edifact schema reference.
 *
 * @member {string} messageId The message id.
 *
 * @member {string} messageVersion The message version.
 *
 * @member {string} messageRelease The message release version.
 *
 * @member {string} [senderApplicationId] The sender application id.
 *
 * @member {string} [senderApplicationQualifier] The sender application
 * qualifier.
 *
 * @member {string} [associationAssignedCode] The association assigned code.
 *
 * @member {string} schemaName The schema name.
 *
 */
class EdifactSchemaReference {
  constructor() {
  }

  /**
   * Defines the metadata of EdifactSchemaReference
   *
   * @returns {object} metadata of EdifactSchemaReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EdifactSchemaReference',
      type: {
        name: 'Composite',
        className: 'EdifactSchemaReference',
        modelProperties: {
          messageId: {
            required: true,
            serializedName: 'messageId',
            type: {
              name: 'String'
            }
          },
          messageVersion: {
            required: true,
            serializedName: 'messageVersion',
            type: {
              name: 'String'
            }
          },
          messageRelease: {
            required: true,
            serializedName: 'messageRelease',
            type: {
              name: 'String'
            }
          },
          senderApplicationId: {
            required: false,
            serializedName: 'senderApplicationId',
            type: {
              name: 'String'
            }
          },
          senderApplicationQualifier: {
            required: false,
            serializedName: 'senderApplicationQualifier',
            type: {
              name: 'String'
            }
          },
          associationAssignedCode: {
            required: false,
            serializedName: 'associationAssignedCode',
            type: {
              name: 'String'
            }
          },
          schemaName: {
            required: true,
            serializedName: 'schemaName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EdifactSchemaReference;
