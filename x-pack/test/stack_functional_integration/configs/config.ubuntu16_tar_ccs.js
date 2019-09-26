/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// import {
//   KibanaSupertestProvider,
//   KibanaSupertestWithoutAuthProvider,
//   ElasticsearchSupertestProvider,
// } from './services';

const serverConfig = require('../test/server_config');

export default async function ({ readConfigFile }) {
  const defaultConfig = await readConfigFile(require.resolve('../../functional/config'));
  // const commonConfig = await readConfigFile(require.resolve('../common/config'));
  // const functionalConfig = await readConfigFile(require.resolve('../functional/config'));

  return {
    ...defaultConfig.getAll(),
    junit: {
      reportName: 'Stack Functional Integration Tests - ubuntu16_tar_ccs'
    },
    testFiles: [
      require.resolve('../test/functional/apps/telemetry'),
      // require.resolve('./test/functional/apps/metricbeat'),
      // require.resolve('./test/functional/apps/filebeat'),
      // require.resolve('./test/functional/apps/packetbeat'),
      // require.resolve('./test/functional/apps/monitoring'),
    ],
    servers: serverConfig.servers,
    apps: serverConfig.apps,
  };
}