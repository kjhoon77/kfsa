// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioEduSchecule {
    ESDATE: string;
    TIME: string;
    EDUGUBUN: string;
    ESMGNO: string;
    EPNM: string;
    ESNOTICE: string;
    ESYEAR: string;
    CGROUPNM: string;
    ESSEATCNT: string;
    EDUPERSON: string;
}

export interface Ids_ioMEduNotice {
    fkeyA: string;
}

export interface Ids_ioMEduNoticeDetail {
}

export interface Ids_ioEduNoticeHistoryGetSysdate {
}

export const useFrmcust0010PEduNoticePrint = () => {
    const [ds_ioEduSchecule, setds_ioEduSchecule] = useState<Ids_ioEduSchecule[]>([]);
    const [ds_ioMEduNotice, setds_ioMEduNotice] = useState<Ids_ioMEduNotice[]>([]);
    const [ds_ioMEduNoticeDetail, setds_ioMEduNoticeDetail] = useState<Ids_ioMEduNoticeDetail[]>([]);
    const [ds_ioEduNoticeHistoryGetSysdate, setds_ioEduNoticeHistoryGetSysdate] = useState<Ids_ioEduNoticeHistoryGetSysdate[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEduSchecule([]);
            setds_ioMEduNotice([]);
            setds_ioMEduNoticeDetail([]);
            setds_ioEduNoticeHistoryGetSysdate([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSearchEduSchedule_OnClick = () => {
        console.log('btnSearchEduSchedule_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PDFPrint = () => {
        console.log('lfn_PDFPrint clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioEduSchecule,
        ds_ioMEduNotice,
        ds_ioMEduNoticeDetail,
        ds_ioEduNoticeHistoryGetSysdate,
        btnSearchEduSchedule_OnClick,
        lfn_End,
        lfn_PDFPrint,
        lfn_Print,
    };
};