// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oEduScheduleList {
    GTMGNO: string;
    COURSECD: string;
    STARTTIME: string;
    ENDTIME: string;
    STARTDATE: string;
    ENDDATE: string;
    DAYGUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oEduScheduleListTmp {
    TOMGGTMGNO: string;
    TOTCCOURSECD: string;
    COL1: string;
    COL2: string;
    COL3: string;
    COL4: string;
    COL5: string;
    COL6: string;
    COL7: string;
    COL8: string;
    COL9: string;
    COL10: string;
    COL11: string;
    COL12: string;
    COL13: string;
    COL14: string;
    COL15: string;
    COL16: string;
    COL17: string;
    COL18: string;
    COL19: string;
    COL20: string;
    COL21: string;
    COL22: string;
    COL23: string;
    COL24: string;
    COL25: string;
    COL26: string;
    COL27: string;
    COL28: string;
    COL29: string;
    COL30: string;
    COL31: string;
    C1: string;
    C2: string;
    C3: string;
    C4: string;
    C5: string;
    C6: string;
    C7: string;
    C8: string;
    C9: string;
    C10: string;
    C11: string;
    C12: string;
    C13: string;
    C14: string;
    C15: string;
    C16: string;
    C17: string;
    C18: string;
    C19: string;
    C20: string;
    C21: string;
    C22: string;
    C23: string;
    C24: string;
    C25: string;
    C26: string;
    C27: string;
    C28: string;
    C29: string;
    C30: string;
    C31: string;
}

export interface Ids_oTitle {
    TOMGGTMGNO: string;
    TOTCCOURSECD: string;
    COL1: string;
    COL2: string;
    COL3: string;
    COL4: string;
    COL5: string;
    COL6: string;
    COL7: string;
    COL8: string;
    COL9: string;
    COL10: string;
    COL11: string;
    COL12: string;
    COL13: string;
    COL14: string;
    COL15: string;
    COL16: string;
    COL17: string;
    COL18: string;
    COL19: string;
    COL20: string;
    COL21: string;
    COL22: string;
    COL23: string;
    COL24: string;
    COL25: string;
    COL26: string;
    COL27: string;
    COL28: string;
    COL29: string;
    COL30: string;
    COL31: string;
    C1: string;
    C2: string;
    C3: string;
    C4: string;
    C5: string;
    C6: string;
    C7: string;
    C8: string;
    C9: string;
    C10: string;
    C11: string;
    C12: string;
    C13: string;
    C14: string;
    C15: string;
    C16: string;
    C17: string;
    C18: string;
    C19: string;
    C20: string;
    C21: string;
    C22: string;
    C23: string;
    C24: string;
    C25: string;
    C26: string;
    C27: string;
    C28: string;
    C29: string;
    C30: string;
    C31: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust1021MEduScheduleStat = () => {
    const [ds_oEduScheduleList, setds_oEduScheduleList] = useState<Ids_oEduScheduleList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEduScheduleListTmp, setds_oEduScheduleListTmp] = useState<Ids_oEduScheduleListTmp[]>([]);
    const [ds_oTitle, setds_oTitle] = useState<Ids_oTitle[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEduScheduleList([]);
            setds_oJibu([]);
            setds_oEduScheduleListTmp([]);
            setds_oTitle([]);
            setds_oEduGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel2 = () => {
        console.log('lfn_Excel2 clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oEduScheduleList,
        ds_oJibu,
        ds_oEduScheduleListTmp,
        ds_oTitle,
        ds_oEduGubun,
        lfn_End,
        lfn_Excel2,
        lfn_PrintScreen,
        lfn_Search,
    };
};