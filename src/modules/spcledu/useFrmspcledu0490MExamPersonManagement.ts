// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oExamOrder {
    EOMGNO: string;
    JJIBUNICK: string;
    EOYEAR: string;
    EOTCCOURSENM: string;
    EOEXAMORDER: string;
    EOEXAMDATE: string;
    EXAMNM: string;
}

export interface Ids_oExamJubsuPersonList {
    ADDR1: string;
    ADDR2: string;
    BIRTHDAY: string;
    EJMGNO: string;
    EOEXAMORDER: string;
    EOHEXAMSEATNO: string;
    EOMGJIBUCD: string;
    EOYEAR: string;
    ESFEE: string;
    ESPROCDATE: string;
    PPASSDATE: string;
    PPASSNO: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    TPHPTEL: string;
    TJPERSONNM: string;
    TPRESIDENTNO: string;
    TPTEL: string;
    TJZIPCD: string;
    JUBSUNO: string;
    TPPASSNO: string;
    TPPASSDATE_A: string;
    GTTEAMNM: string;
}

export const useFrmspcledu0490MExamPersonManagement = () => {
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_oExamJubsuPersonList, setds_oExamJubsuPersonList] = useState<Ids_oExamJubsuPersonList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamOrder([]);
            setds_oExamJubsuPersonList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnNext_OnClick = () => {
        console.log('btnNext_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oExamOrder,
        ds_oExamJubsuPersonList,
        btnMutilSort_OnClick,
        btnNext_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};