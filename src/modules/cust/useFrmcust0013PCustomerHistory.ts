// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oModifyHistory, Ids_oManagerList, Ids_oChangeHistory, Ids_oMemberH } from './Frmcust0013PCustomerHistoryData';

export const useFrmcust0013PCustomerHistory = () => {
    const [ds_oModifyHistory, setds_oModifyHistory] = useState<Ids_oModifyHistory[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oChangeHistory, setds_oChangeHistory] = useState<Ids_oChangeHistory[]>([]);
    const [ds_oMemberH, setds_oMemberH] = useState<Ids_oMemberH[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oModifyHistory([]);
            setds_oManagerList([]);
            setds_oChangeHistory([]);
            setds_oMemberH([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oModifyHistory,
        ds_oManagerList,
        ds_oChangeHistory,
        ds_oMemberH,
        tabValue_tabTab1,
        setTabValue_tabTab1,
        lfn_End,
    };
};