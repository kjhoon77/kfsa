// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioHistorySearch {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduNoticeHistoryResearchEduList1 {
    CD: string;
    DATA: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduStudent {
    CD: string;
    DATA: string;
}

export const useFrmcust1106MEduNoticeH = () => {
    const [ds_ioHistorySearch, setds_ioHistorySearch] = useState<Ids_ioHistorySearch[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioEduNoticeHistoryResearchEduList1, setds_ioEduNoticeHistoryResearchEduList1] = useState<Ids_ioEduNoticeHistoryResearchEduList1[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oEduStudent, setds_oEduStudent] = useState<Ids_oEduStudent[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioHistorySearch([]);
            setds_ioGubun([]);
            setds_oJibu([]);
            setds_ioEduNoticeHistoryResearchEduList1([]);
            setds_oEduGubun([]);
            setds_oEduStudent([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_EduNoticeHistorySearch = () => {
        console.log('lfn_EduNoticeHistorySearch clicked');
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
        ds_ioHistorySearch,
        ds_ioGubun,
        ds_oJibu,
        ds_ioEduNoticeHistoryResearchEduList1,
        ds_oEduGubun,
        ds_oEduStudent,
        lfn_EduNoticeHistorySearch,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
    };
};