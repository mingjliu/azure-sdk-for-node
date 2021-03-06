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
 * Initializes a new instance of the EdifactEnvelopeSettings class.
 * @constructor
 * The Edifact agreement envelope settings.
 *
 * @member {string} [groupAssociationAssignedCode] The group association
 * assigned code.
 *
 * @member {string} [communicationAgreementId] The communication agreement id.
 *
 * @member {boolean} applyDelimiterStringAdvice The value indicating whether to
 * apply delimiter string advice.
 *
 * @member {boolean} createGroupingSegments The value indicating whether to
 * create grouping segments.
 *
 * @member {boolean} enableDefaultGroupHeaders The value indicating whether to
 * enable default group headers.
 *
 * @member {string} [recipientReferencePasswordValue] The recipient reference
 * password value.
 *
 * @member {string} [recipientReferencePasswordQualifier] The recipient
 * reference password qualifier.
 *
 * @member {string} [applicationReferenceId] The application reference id.
 *
 * @member {string} [processingPriorityCode] The processing priority code.
 *
 * @member {number} interchangeControlNumberLowerBound The interchange control
 * number lower bound.
 *
 * @member {number} interchangeControlNumberUpperBound The interchange control
 * number upper bound.
 *
 * @member {boolean} rolloverInterchangeControlNumber The value indicating
 * whether to rollover interchange control number.
 *
 * @member {string} [interchangeControlNumberPrefix] The interchange control
 * number prefix.
 *
 * @member {string} [interchangeControlNumberSuffix] The interchange control
 * number suffix.
 *
 * @member {string} [senderReverseRoutingAddress] The sender reverse routing
 * address.
 *
 * @member {string} [receiverReverseRoutingAddress] The receiver reverse
 * routing address.
 *
 * @member {string} [functionalGroupId] The functional group id.
 *
 * @member {string} [groupControllingAgencyCode] The group controlling agency
 * code.
 *
 * @member {string} [groupMessageVersion] The group message version.
 *
 * @member {string} [groupMessageRelease] The group message release.
 *
 * @member {number} groupControlNumberLowerBound The group control number lower
 * bound.
 *
 * @member {number} groupControlNumberUpperBound The group control number upper
 * bound.
 *
 * @member {boolean} rolloverGroupControlNumber The value indicating whether to
 * rollover group control number.
 *
 * @member {string} [groupControlNumberPrefix] The group control number prefix.
 *
 * @member {string} [groupControlNumberSuffix] The group control number suffix.
 *
 * @member {string} [groupApplicationReceiverQualifier] The group application
 * receiver qualifier.
 *
 * @member {string} [groupApplicationReceiverId] The group application receiver
 * id.
 *
 * @member {string} [groupApplicationSenderQualifier] The group application
 * sender qualifier.
 *
 * @member {string} [groupApplicationSenderId] The group application sender id.
 *
 * @member {string} [groupApplicationPassword] The group application password.
 *
 * @member {boolean} overwriteExistingTransactionSetControlNumber The value
 * indicating whether to overwrite existing transaction set control number.
 *
 * @member {string} [transactionSetControlNumberPrefix] The transaction set
 * control number prefix.
 *
 * @member {string} [transactionSetControlNumberSuffix] The transaction set
 * control number suffix.
 *
 * @member {number} transactionSetControlNumberLowerBound The transaction set
 * control number lower bound.
 *
 * @member {number} transactionSetControlNumberUpperBound The transaction set
 * control number upper bound.
 *
 * @member {boolean} rolloverTransactionSetControlNumber The value indicating
 * whether to rollover transaction set control number.
 *
 * @member {boolean} isTestInterchange The value indicating whether the message
 * is a test interchange.
 *
 * @member {string} [senderInternalIdentification] The sender internal
 * identification.
 *
 * @member {string} [senderInternalSubIdentification] The sender internal sub
 * identification.
 *
 * @member {string} [receiverInternalIdentification] The receiver internal
 * identification.
 *
 * @member {string} [receiverInternalSubIdentification] The receiver internal
 * sub identification.
 *
 */
class EdifactEnvelopeSettings {
  constructor() {
  }

  /**
   * Defines the metadata of EdifactEnvelopeSettings
   *
   * @returns {object} metadata of EdifactEnvelopeSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EdifactEnvelopeSettings',
      type: {
        name: 'Composite',
        className: 'EdifactEnvelopeSettings',
        modelProperties: {
          groupAssociationAssignedCode: {
            required: false,
            serializedName: 'groupAssociationAssignedCode',
            type: {
              name: 'String'
            }
          },
          communicationAgreementId: {
            required: false,
            serializedName: 'communicationAgreementId',
            type: {
              name: 'String'
            }
          },
          applyDelimiterStringAdvice: {
            required: true,
            serializedName: 'applyDelimiterStringAdvice',
            type: {
              name: 'Boolean'
            }
          },
          createGroupingSegments: {
            required: true,
            serializedName: 'createGroupingSegments',
            type: {
              name: 'Boolean'
            }
          },
          enableDefaultGroupHeaders: {
            required: true,
            serializedName: 'enableDefaultGroupHeaders',
            type: {
              name: 'Boolean'
            }
          },
          recipientReferencePasswordValue: {
            required: false,
            serializedName: 'recipientReferencePasswordValue',
            type: {
              name: 'String'
            }
          },
          recipientReferencePasswordQualifier: {
            required: false,
            serializedName: 'recipientReferencePasswordQualifier',
            type: {
              name: 'String'
            }
          },
          applicationReferenceId: {
            required: false,
            serializedName: 'applicationReferenceId',
            type: {
              name: 'String'
            }
          },
          processingPriorityCode: {
            required: false,
            serializedName: 'processingPriorityCode',
            type: {
              name: 'String'
            }
          },
          interchangeControlNumberLowerBound: {
            required: true,
            serializedName: 'interchangeControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          interchangeControlNumberUpperBound: {
            required: true,
            serializedName: 'interchangeControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverInterchangeControlNumber: {
            required: true,
            serializedName: 'rolloverInterchangeControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          interchangeControlNumberPrefix: {
            required: false,
            serializedName: 'interchangeControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          interchangeControlNumberSuffix: {
            required: false,
            serializedName: 'interchangeControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          senderReverseRoutingAddress: {
            required: false,
            serializedName: 'senderReverseRoutingAddress',
            type: {
              name: 'String'
            }
          },
          receiverReverseRoutingAddress: {
            required: false,
            serializedName: 'receiverReverseRoutingAddress',
            type: {
              name: 'String'
            }
          },
          functionalGroupId: {
            required: false,
            serializedName: 'functionalGroupId',
            type: {
              name: 'String'
            }
          },
          groupControllingAgencyCode: {
            required: false,
            serializedName: 'groupControllingAgencyCode',
            type: {
              name: 'String'
            }
          },
          groupMessageVersion: {
            required: false,
            serializedName: 'groupMessageVersion',
            type: {
              name: 'String'
            }
          },
          groupMessageRelease: {
            required: false,
            serializedName: 'groupMessageRelease',
            type: {
              name: 'String'
            }
          },
          groupControlNumberLowerBound: {
            required: true,
            serializedName: 'groupControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          groupControlNumberUpperBound: {
            required: true,
            serializedName: 'groupControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverGroupControlNumber: {
            required: true,
            serializedName: 'rolloverGroupControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          groupControlNumberPrefix: {
            required: false,
            serializedName: 'groupControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          groupControlNumberSuffix: {
            required: false,
            serializedName: 'groupControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          groupApplicationReceiverQualifier: {
            required: false,
            serializedName: 'groupApplicationReceiverQualifier',
            type: {
              name: 'String'
            }
          },
          groupApplicationReceiverId: {
            required: false,
            serializedName: 'groupApplicationReceiverId',
            type: {
              name: 'String'
            }
          },
          groupApplicationSenderQualifier: {
            required: false,
            serializedName: 'groupApplicationSenderQualifier',
            type: {
              name: 'String'
            }
          },
          groupApplicationSenderId: {
            required: false,
            serializedName: 'groupApplicationSenderId',
            type: {
              name: 'String'
            }
          },
          groupApplicationPassword: {
            required: false,
            serializedName: 'groupApplicationPassword',
            type: {
              name: 'String'
            }
          },
          overwriteExistingTransactionSetControlNumber: {
            required: true,
            serializedName: 'overwriteExistingTransactionSetControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          transactionSetControlNumberPrefix: {
            required: false,
            serializedName: 'transactionSetControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          transactionSetControlNumberSuffix: {
            required: false,
            serializedName: 'transactionSetControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          transactionSetControlNumberLowerBound: {
            required: true,
            serializedName: 'transactionSetControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          transactionSetControlNumberUpperBound: {
            required: true,
            serializedName: 'transactionSetControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverTransactionSetControlNumber: {
            required: true,
            serializedName: 'rolloverTransactionSetControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          isTestInterchange: {
            required: true,
            serializedName: 'isTestInterchange',
            type: {
              name: 'Boolean'
            }
          },
          senderInternalIdentification: {
            required: false,
            serializedName: 'senderInternalIdentification',
            type: {
              name: 'String'
            }
          },
          senderInternalSubIdentification: {
            required: false,
            serializedName: 'senderInternalSubIdentification',
            type: {
              name: 'String'
            }
          },
          receiverInternalIdentification: {
            required: false,
            serializedName: 'receiverInternalIdentification',
            type: {
              name: 'String'
            }
          },
          receiverInternalSubIdentification: {
            required: false,
            serializedName: 'receiverInternalSubIdentification',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EdifactEnvelopeSettings;
