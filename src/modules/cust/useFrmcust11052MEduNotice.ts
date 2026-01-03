// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioEduNoticeHistoryResearchEdu, Ids_ioEduNoticeHistoryResearchEduList1, Ids_ioMemberGubun, Ids_ioEduNoticeHistoryDay, Ids_ioEduNoticeHistoryResearchEduList2, Ids_ioEduNoticeHistoryResearchEduList3, Ids_oEduGubun, Ids_oEduStudent } from './Frmcust11052MEduNoticeData';

export const useFrmcust11052MEduNotice = () => {
    const [ds_ioEduNoticeHistoryResearchEdu, setds_ioEduNoticeHistoryResearchEdu] = useState<Ids_ioEduNoticeHistoryResearchEdu[]>([]);
    const [ds_ioEduNoticeHistoryResearchEduList1, setds_ioEduNoticeHistoryResearchEduList1] = useState<Ids_ioEduNoticeHistoryResearchEduList1[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioEduNoticeHistoryDay, setds_ioEduNoticeHistoryDay] = useState<Ids_ioEduNoticeHistoryDay[]>([]);
    const [ds_ioEduNoticeHistoryResearchEduList2, setds_ioEduNoticeHistoryResearchEduList2] = useState<Ids_ioEduNoticeHistoryResearchEduList2[]>([]);
    const [ds_ioEduNoticeHistoryResearchEduList3, setds_ioEduNoticeHistoryResearchEduList3] = useState<Ids_ioEduNoticeHistoryResearchEduList3[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oEduStudent, setds_oEduStudent] = useState<Ids_oEduStudent[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEduNoticeHistoryResearchEdu([]);
            setds_ioEduNoticeHistoryResearchEduList1([]);
            setds_ioMemberGubun([]);
            setds_ioEduNoticeHistoryDay([]);
            setds_ioEduNoticeHistoryResearchEduList2([]);
            setds_ioEduNoticeHistoryResearchEduList3([]);
            setds_oEduGubun([]);
            setds_oEduStudent([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_EduPrint = () => {
        console.log('lfn_EduPrint clicked');
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
        ds_ioEduNoticeHistoryResearchEdu,
        ds_ioEduNoticeHistoryResearchEduList1,
        ds_ioMemberGubun,
        ds_ioEduNoticeHistoryDay,
        ds_ioEduNoticeHistoryResearchEduList2,
        ds_ioEduNoticeHistoryResearchEduList3,
        ds_oEduGubun,
        ds_oEduStudent,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMutilSort_OnClick,
        lfn_EduPrint,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
    };
};