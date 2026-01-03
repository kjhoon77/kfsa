// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfUser, Ids_oJibuGubun, Ids_oProfGubun, Ids_iProfUserCnt, Ids_oProfGubunAll, Ids_iOnlyKey, Ids_oProfUserReport, Ids_oProfTeachingPlanReport, Ids_oProfPersonSchoolReport, Ids_oProfPersonLisenceReport, Ids_oProfSeminarReport, Ids_oProfPaperReport, Ids_oProfPersonEduReport, Ids_oProfLectureReport, Ids_oProfExpertReport, Ids_oProfPrizeReport } from './Frmprofes0001MProfMgmtData';

export const useFrmprofes0001MProfMgmt = () => {
    const [ds_ioProfUser, setds_ioProfUser] = useState<Ids_ioProfUser[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_oProfGubun, setds_oProfGubun] = useState<Ids_oProfGubun[]>([]);
    const [ds_iProfUserCnt, setds_iProfUserCnt] = useState<Ids_iProfUserCnt[]>([]);
    const [ds_oProfGubunAll, setds_oProfGubunAll] = useState<Ids_oProfGubunAll[]>([]);
    const [ds_iOnlyKey, setds_iOnlyKey] = useState<Ids_iOnlyKey[]>([]);
    const [ds_oProfUserReport, setds_oProfUserReport] = useState<Ids_oProfUserReport[]>([]);
    const [ds_oProfTeachingPlanReport, setds_oProfTeachingPlanReport] = useState<Ids_oProfTeachingPlanReport[]>([]);
    const [ds_oProfPersonSchoolReport, setds_oProfPersonSchoolReport] = useState<Ids_oProfPersonSchoolReport[]>([]);
    const [ds_oProfPersonLisenceReport, setds_oProfPersonLisenceReport] = useState<Ids_oProfPersonLisenceReport[]>([]);
    const [ds_oProfSeminarReport, setds_oProfSeminarReport] = useState<Ids_oProfSeminarReport[]>([]);
    const [ds_oProfPaperReport, setds_oProfPaperReport] = useState<Ids_oProfPaperReport[]>([]);
    const [ds_oProfPersonEduReport, setds_oProfPersonEduReport] = useState<Ids_oProfPersonEduReport[]>([]);
    const [ds_oProfLectureReport, setds_oProfLectureReport] = useState<Ids_oProfLectureReport[]>([]);
    const [ds_oProfExpertReport, setds_oProfExpertReport] = useState<Ids_oProfExpertReport[]>([]);
    const [ds_oProfPrizeReport, setds_oProfPrizeReport] = useState<Ids_oProfPrizeReport[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfUser([]);
            setds_oJibuGubun([]);
            setds_oProfGubun([]);
            setds_iProfUserCnt([]);
            setds_oProfGubunAll([]);
            setds_iOnlyKey([]);
            setds_oProfUserReport([]);
            setds_oProfTeachingPlanReport([]);
            setds_oProfPersonSchoolReport([]);
            setds_oProfPersonLisenceReport([]);
            setds_oProfSeminarReport([]);
            setds_oProfPaperReport([]);
            setds_oProfPersonEduReport([]);
            setds_oProfLectureReport([]);
            setds_oProfExpertReport([]);
            setds_oProfPrizeReport([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnReport_OnClick = () => {
        console.log('btnReport_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioProfUser,
        ds_oJibuGubun,
        ds_oProfGubun,
        ds_iProfUserCnt,
        ds_oProfGubunAll,
        ds_iOnlyKey,
        ds_oProfUserReport,
        ds_oProfTeachingPlanReport,
        ds_oProfPersonSchoolReport,
        ds_oProfPersonLisenceReport,
        ds_oProfSeminarReport,
        ds_oProfPaperReport,
        ds_oProfPersonEduReport,
        ds_oProfLectureReport,
        ds_oProfExpertReport,
        ds_oProfPrizeReport,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        tabValue_tabTab,
        setTabValue_tabTab,
        btnMutilSort_OnClick,
        btnReport_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};