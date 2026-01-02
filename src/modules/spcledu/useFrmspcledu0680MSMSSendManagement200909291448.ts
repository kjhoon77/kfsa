// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioSmsTraining, Ids_oRegion, Ids_oTrainingPassYn, Ids_oRepayYn, Ids_oCourse, Ids_oWorkGubun, Ids_oExamPassYn, Ids_ioSmsExam, Ids_oJibu } from './Frmspcledu0680MSMSSendManagement200909291448Data';

export const useFrmspcledu0680MSMSSendManagement200909291448 = () => {
    const [ds_ioSmsTraining, setds_ioSmsTraining] = useState<Ids_ioSmsTraining[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oTrainingPassYn, setds_oTrainingPassYn] = useState<Ids_oTrainingPassYn[]>([]);
    const [ds_oRepayYn, setds_oRepayYn] = useState<Ids_oRepayYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oExamPassYn, setds_oExamPassYn] = useState<Ids_oExamPassYn[]>([]);
    const [ds_ioSmsExam, setds_ioSmsExam] = useState<Ids_ioSmsExam[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSmsTraining([]);
            setds_oRegion([]);
            setds_oTrainingPassYn([]);
            setds_oRepayYn([]);
            setds_oCourse([]);
            setds_oWorkGubun([]);
            setds_oExamPassYn([]);
            setds_ioSmsExam([]);
            setds_oJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const chkReseve_OnClick = () => {
        console.log('chkReseve_OnClick clicked');
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
    const lfn_Send = () => {
        console.log('lfn_Send clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioSmsTraining,
        ds_oRegion,
        ds_oTrainingPassYn,
        ds_oRepayYn,
        ds_oCourse,
        ds_oWorkGubun,
        ds_oExamPassYn,
        ds_ioSmsExam,
        ds_oJibu,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMutilSort_OnClick,
        chkReseve_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_Send,
        lfn_localExcel,
    };
};