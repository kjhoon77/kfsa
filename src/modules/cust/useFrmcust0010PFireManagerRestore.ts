// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOldFMInfo, Ids_oRestoreStatus } from './Frmcust0010PFireManagerRestoreData';

export const useFrmcust0010PFireManagerRestore = () => {
    const [ds_oOldFMInfo, setds_oOldFMInfo] = useState<Ids_oOldFMInfo[]>([]);
    const [ds_oRestoreStatus, setds_oRestoreStatus] = useState<Ids_oRestoreStatus[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oOldFMInfo([]);
            setds_oRestoreStatus([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oOldFMInfo,
        ds_oRestoreStatus,
        lfn_End,
        lfn_Save,
    };
};