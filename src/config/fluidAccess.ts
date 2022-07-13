import { AzureClient, AzureRemoteConnectionConfig } from "@fluidframework/azure-client";

/**
 * Implement with your own configuration.
 */
const remoteConnectionConfig: AzureRemoteConnectionConfig = {
    type: 'remote',
    "tenantId": undefined,
    "tokenProvider": undefined,
    "endpoint": undefined,
  };
export const fluidClient = new AzureClient({
    "connection": remoteConnectionConfig
});



