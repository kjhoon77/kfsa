// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioEduCreate {
    CD: string;
    DATE: string;
    TIME: string;
    EDUNO: string;
    TARGETNO: string;
    EDUPERSON: string;
    EDUGUBUN: string;
    ESMGNO: string;
    EPNM: string;
    ESNOTICE: string;
}

export interface Ids_ioEduDay1 {
}

export interface Ids_ioEduDay2 {
}

export interface Ids_ioEduDay3 {
}

export interface Ids_ioEduDay4 {
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduNoticeHistoryDay {
}

export interface Ids_ioEduNoticeHistoryGetSysdate {
}

export const useFrmcust11071MFireDefEduNotice = () => {
    const [ds_ioEduCreate, setds_ioEduCreate] = useState<Ids_ioEduCreate[]>([]);
    const [ds_ioEduDay1, setds_ioEduDay1] = useState<Ids_ioEduDay1[]>([]);
    const [ds_ioEduDay2, setds_ioEduDay2] = useState<Ids_ioEduDay2[]>([]);
    const [ds_ioEduDay3, setds_ioEduDay3] = useState<Ids_ioEduDay3[]>([]);
    const [ds_ioEduDay4, setds_ioEduDay4] = useState<Ids_ioEduDay4[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioEduNoticeHistoryDay, setds_ioEduNoticeHistoryDay] = useState<Ids_ioEduNoticeHistoryDay[]>([]);
    const [ds_ioEduNoticeHistoryGetSysdate, setds_ioEduNoticeHistoryGetSysdate] = useState<Ids_ioEduNoticeHistoryGetSysdate[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEduCreate([]);
            setds_ioEduDay1([]);
            setds_ioEduDay2([]);
            setds_ioEduDay3([]);
            setds_ioEduDay4([]);
            setds_ioMemberGubun([]);
            setds_ioEduNoticeHistoryDay([]);
            setds_ioEduNoticeHistoryGetSysdate([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_EduCustSMSSend = () => {
        console.log('lfn_EduCustSMSSend clicked');
    };
    const lfn_EduPrintSave = () => {
        console.log('lfn_EduPrintSave clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ioEduCreate,
        ds_ioEduDay1,
        ds_ioEduDay2,
        ds_ioEduDay3,
        ds_ioEduDay4,
        ds_ioMemberGubun,
        ds_ioEduNoticeHistoryDay,
        ds_ioEduNoticeHistoryGetSysdate,
        btnMutilSort_OnClick,
        lfn_EduCustSMSSend,
        lfn_EduPrintSave,
        lfn_End,
        lfn_PrintScreen,
    };
};