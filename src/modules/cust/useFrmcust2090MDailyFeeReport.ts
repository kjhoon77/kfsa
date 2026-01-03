// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioMemberFee, Ids_ioGubun, Ids_ioSunap, Ids_oJibu, Ids_oMemberfee1_1, Ids_oMemberfee2_1, Ids_oMemberfee1, Ids_oMemberfee2, Ids_oMemberfee3, Ids_PrintGubun } from './Frmcust2090MDailyFeeReportData';

export const useFrmcust2090MDailyFeeReport = () => {
    const [ds_ioMemberFee, setds_ioMemberFee] = useState<Ids_ioMemberFee[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioSunap, setds_ioSunap] = useState<Ids_ioSunap[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oMemberfee1_1, setds_oMemberfee1_1] = useState<Ids_oMemberfee1_1[]>([]);
    const [ds_oMemberfee2_1, setds_oMemberfee2_1] = useState<Ids_oMemberfee2_1[]>([]);
    const [ds_oMemberfee1, setds_oMemberfee1] = useState<Ids_oMemberfee1[]>([]);
    const [ds_oMemberfee2, setds_oMemberfee2] = useState<Ids_oMemberfee2[]>([]);
    const [ds_oMemberfee3, setds_oMemberfee3] = useState<Ids_oMemberfee3[]>([]);
    const [ds_PrintGubun, setds_PrintGubun] = useState<Ids_PrintGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberFee([]);
            setds_ioGubun([]);
            setds_ioSunap([]);
            setds_oJibu([]);
            setds_oMemberfee1_1([]);
            setds_oMemberfee2_1([]);
            setds_oMemberfee1([]);
            setds_oMemberfee2([]);
            setds_oMemberfee3([]);
            setds_PrintGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioMemberFee,
        ds_ioGubun,
        ds_ioSunap,
        ds_oJibu,
        ds_oMemberfee1_1,
        ds_oMemberfee2_1,
        ds_oMemberfee1,
        ds_oMemberfee2,
        ds_oMemberfee3,
        ds_PrintGubun,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_localExcel,
    };
};