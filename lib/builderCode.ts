import { Attribution } from 'ox/erc8021';

// Your Base Builder Code from base.dev
export const BUILDER_CODE = "bc_xklm0ppx";

// Generate the data suffix for transaction attribution
export const getBuilderCodeSuffix = () => {
    return Attribution.toDataSuffix({ codes: [BUILDER_CODE] });
};

// Configuration for useSendCalls capabilities
export const getBuilderCodeCapabilities = () => ({
    dataSuffix: getBuilderCodeSuffix()
});
