'use client';

import { useSendCalls } from 'wagmi';
import { getBuilderCodeCapabilities, BUILDER_CODE } from '@/lib/builderCode';

interface SendCallsParams {
    to: `0x${string}`;
    data?: `0x${string}`;
    value?: bigint;
}

/**
 * Custom hook for sending transactions with Base Builder Code attribution.
 * 
 * Usage:
 * ```tsx
 * const { sendCallsWithAttribution, isPending, isSuccess, error } = useBuilderCodeTransaction();
 * 
 * await sendCallsWithAttribution({
 *   to: '0xContractAddress',
 *   data: '0xCallData',
 *   value: parseEther('0.01')
 * });
 * ```
 */
export function useBuilderCodeTransaction() {
    const { sendCalls, isPending, isSuccess, isError, error, data } = useSendCalls();

    const sendCallsWithAttribution = async (calls: SendCallsParams | SendCallsParams[]) => {
        const callsArray = Array.isArray(calls) ? calls : [calls];

        return sendCalls({
            calls: callsArray,
            capabilities: getBuilderCodeCapabilities()
        });
    };

    return {
        sendCallsWithAttribution,
        isPending,
        isSuccess,
        isError,
        error,
        data,
        builderCode: BUILDER_CODE
    };
}
