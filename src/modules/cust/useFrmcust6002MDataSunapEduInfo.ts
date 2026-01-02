// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oEduPassList, Ids_oBizGubun, Ids_oEduList, Ids_oMonthGubun, Ids_oSunap } from './Frmcust6002MDataSunapEduInfoData';

export const useFrmcust6002MDataSunapEduInfo = () => {
    const [ds_oEduPassList, setds_oEduPassList] = useState<Ids_oEduPassList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_oEduList, setds_oEduList] = useState<Ids_oEduList[]>([]);
    const [ds_oMonthGubun, setds_oMonthGubun] = useState<Ids_oMonthGubun[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEduPassList([]);
            setds_oBizGubun([]);
            setds_oEduList([]);
            setds_oMonthGubun([]);
            setds_oSunap([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oEduPassList,
        ds_oBizGubun,
        ds_oEduList,
        ds_oMonthGubun,
        ds_oSunap,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
    };
};