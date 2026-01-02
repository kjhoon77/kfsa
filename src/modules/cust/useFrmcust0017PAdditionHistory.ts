// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun, Ids_oAdditionList, Ids_oAdditionInfo, Ids_oStatus, Ids_oSeq } from './Frmcust0017PAdditionHistoryData';

export const useFrmcust0017PAdditionHistory = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_oAdditionList, setds_oAdditionList] = useState<Ids_oAdditionList[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oSeq, setds_oSeq] = useState<Ids_oSeq[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_oAdditionList([]);
            setds_oAdditionInfo([]);
            setds_oStatus([]);
            setds_oSeq([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Form_OnUnloadCompleted = () => {
        console.log('Form_OnUnloadCompleted clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_oAdditionList,
        ds_oAdditionInfo,
        ds_oStatus,
        ds_oSeq,
        Form_OnUnloadCompleted,
        lfn_Save,
    };
};