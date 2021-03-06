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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the StartClusterUpgrade class.
 * @constructor
 * The description of the start cluster upgrade
 *
 * @member {string} [configVersion] The version of the config
 *
 * @member {string} [codeVersion] The version of the code
 *
 * @member {string} [upgradeKind] The kind of the upgrade
 *
 * @member {string} [rollingUpgradeMode] The mode of the rolling upgrade.
 * Possible values include: 'Invalid', 'UnmonitoredAuto', 'UnmonitoredManual',
 * 'Monitored'
 *
 * @member {number} [upgradeReplicaSetCheckTimeoutInSeconds] The seconds of the
 * upgrade replica set check timeout
 *
 * @member {boolean} [forceRestart] The flag of the force restart
 *
 * @member {boolean} [enableDeltaHealthEvaluation] The evaluation of the enable
 * delta health
 *
 * @member {object} [monitoringPolicy] The policy of the monitoring
 *
 * @member {object} [clusterUpgradeHealthPolicy] The policy of the cluster
 * upgrade health
 *
 * @member {number} [clusterUpgradeHealthPolicy.maxPercentDeltaUnhealthyNodes]
 * The max percent of the delta unhealthy nodes, values are [0-100]
 *
 * @member {number}
 * [clusterUpgradeHealthPolicy.maxPercentUpgradeDomainDeltaUnhealthyNodes] The
 * max percent of the upgrade domain delta unhealthy nodes, values are [0-100]
 *
 * @member {object} [applicationHealthPolicyMap] The map of the application
 * health policy
 *
 * @member {boolean} [applicationHealthPolicyMap.considerWarningAsError] The
 * boolean of the consider warning as error
 *
 * @member {number}
 * [applicationHealthPolicyMap.maxPercentUnhealthyDeployedApplications] The max
 * percent of the unhealthy deployed applications
 *
 * @member {number} [applicationHealthPolicyMap.defaultServiceTypeHealthPolicy]
 * The policy of the default service type health
 *
 * @member {number} [applicationHealthPolicyMap.maxPercentUnhealthyServices]
 * The policy of the default service type health
 *
 * @member {number}
 * [applicationHealthPolicyMap.maxPercentUnhealthyPartitionsPerService] The max
 * percent unhealthy partitions per service
 *
 * @member {number}
 * [applicationHealthPolicyMap.maxPercentUnhealthyReplicasPerPartition] The max
 * percent unhealthy replicas per partition
 *
 */
class StartClusterUpgrade {
  constructor() {
  }

  /**
   * Defines the metadata of StartClusterUpgrade
   *
   * @returns {object} metadata of StartClusterUpgrade
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StartClusterUpgrade',
      type: {
        name: 'Composite',
        className: 'StartClusterUpgrade',
        modelProperties: {
          configVersion: {
            required: false,
            serializedName: 'ConfigVersion',
            type: {
              name: 'String'
            }
          },
          codeVersion: {
            required: false,
            serializedName: 'CodeVersion',
            type: {
              name: 'String'
            }
          },
          upgradeKind: {
            required: false,
            serializedName: 'UpgradeKind',
            type: {
              name: 'String'
            }
          },
          rollingUpgradeMode: {
            required: false,
            serializedName: 'RollingUpgradeMode',
            type: {
              name: 'String'
            }
          },
          upgradeReplicaSetCheckTimeoutInSeconds: {
            required: false,
            serializedName: 'UpgradeReplicaSetCheckTimeoutInSeconds',
            type: {
              name: 'Number'
            }
          },
          forceRestart: {
            required: false,
            serializedName: 'ForceRestart',
            type: {
              name: 'Boolean'
            }
          },
          enableDeltaHealthEvaluation: {
            required: false,
            serializedName: 'EnableDeltaHealthEvaluation',
            type: {
              name: 'Boolean'
            }
          },
          monitoringPolicy: {
            required: false,
            serializedName: 'MonitoringPolicy',
            type: {
              name: 'Object'
            }
          },
          clusterUpgradeHealthPolicy: {
            required: false,
            serializedName: 'ClusterUpgradeHealthPolicy',
            type: {
              name: 'Composite',
              className: 'ClusterUpgradeHealthPolicy'
            }
          },
          applicationHealthPolicyMap: {
            required: false,
            serializedName: 'ApplicationHealthPolicyMap',
            type: {
              name: 'Composite',
              className: 'ApplicationHealthPolicyMap'
            }
          }
        }
      }
    };
  }
}

module.exports = StartClusterUpgrade;
