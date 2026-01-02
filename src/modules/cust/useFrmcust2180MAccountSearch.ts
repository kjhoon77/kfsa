// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oAccount, Ids_oBank, Ids_oError, Ids_oChange, Ids_oMemberFee, Ids_oSort, Ids_oAccountCnt } from './Frmcust2180MAccountSearchData';

export const useFrmcust2180MAccountSearch = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oAccount, setds_oAccount] = useState<Ids_oAccount[]>([]);
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_oError, setds_oError] = useState<Ids_oError[]>([]);
    const [ds_oChange, setds_oChange] = useState<Ids_oChange[]>([]);
    const [ds_oMemberFee, setds_oMemberFee] = useState<Ids_oMemberFee[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oAccountCnt, setds_oAccountCnt] = useState<Ids_oAccountCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oAccount([]);
            setds_oBank([]);
            setds_oError([]);
            setds_oChange([]);
            setds_oMemberFee([]);
            setds_oSort([]);
            setds_oAccountCnt([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oAccount,
        ds_oBank,
        ds_oError,
        ds_oChange,
        ds_oMemberFee,
        ds_oSort,
        ds_oAccountCnt,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};