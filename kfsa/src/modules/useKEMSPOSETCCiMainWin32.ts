// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Igds_oUserInfo, Igds_oPosResult, Igds_oPrintReceiptMast, Igds_oPrintReceiptDtl, Igds_oPrintReceiptHistory, Igds_ioPrinter, Igds_ioPrintConfig, Igds_oLocalPrinter } from './KEMSPOSETCCiMainWin32Data';

export const useKEMSPOSETCCiMainWin32 = () => {
    const [gds_oUserInfo, setgds_oUserInfo] = useState<Igds_oUserInfo[]>([]);
    const [gds_oPosResult, setgds_oPosResult] = useState<Igds_oPosResult[]>([]);
    const [gds_oPrintReceiptMast, setgds_oPrintReceiptMast] = useState<Igds_oPrintReceiptMast[]>([]);
    const [gds_oPrintReceiptDtl, setgds_oPrintReceiptDtl] = useState<Igds_oPrintReceiptDtl[]>([]);
    const [gds_oPrintReceiptHistory, setgds_oPrintReceiptHistory] = useState<Igds_oPrintReceiptHistory[]>([]);
    const [gds_ioPrinter, setgds_ioPrinter] = useState<Igds_ioPrinter[]>([]);
    const [gds_ioPrintConfig, setgds_ioPrintConfig] = useState<Igds_ioPrintConfig[]>([]);
    const [gds_oLocalPrinter, setgds_oLocalPrinter] = useState<Igds_oLocalPrinter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setgds_oUserInfo([]);
            setgds_oPosResult([]);
            setgds_oPrintReceiptMast([]);
            setgds_oPrintReceiptDtl([]);
            setgds_oPrintReceiptHistory([]);
            setgds_ioPrinter([]);
            setgds_ioPrintConfig([]);
            setgds_oLocalPrinter([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        gds_oUserInfo,
        gds_oPosResult,
        gds_oPrintReceiptMast,
        gds_oPrintReceiptDtl,
        gds_oPrintReceiptHistory,
        gds_ioPrinter,
        gds_ioPrintConfig,
        gds_oLocalPrinter,
    };
};