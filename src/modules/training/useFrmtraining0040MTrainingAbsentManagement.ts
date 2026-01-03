// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingAbsent, Ids_oCourse, Ids_oJibu, Ids_oAbsentDateGubun, Ids_oTrainingJubsuCnt, Ids_oAbsentDateGubun1, Ids_oAbsentDateGubun2, Ids_oAbsentDateGubun3, Ids_oAbsentDateGubun4, Ids_oAbsentDateGubun5, Ids_oAbsentDateGubun6 } from './Frmtraining0040MTrainingAbsentManagementData';

export const useFrmtraining0040MTrainingAbsentManagement = () => {
    const [ds_ioTrainingAbsent, setds_ioTrainingAbsent] = useState<Ids_ioTrainingAbsent[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oAbsentDateGubun, setds_oAbsentDateGubun] = useState<Ids_oAbsentDateGubun[]>([]);
    const [ds_oTrainingJubsuCnt, setds_oTrainingJubsuCnt] = useState<Ids_oTrainingJubsuCnt[]>([]);
    const [ds_oAbsentDateGubun1, setds_oAbsentDateGubun1] = useState<Ids_oAbsentDateGubun1[]>([]);
    const [ds_oAbsentDateGubun2, setds_oAbsentDateGubun2] = useState<Ids_oAbsentDateGubun2[]>([]);
    const [ds_oAbsentDateGubun3, setds_oAbsentDateGubun3] = useState<Ids_oAbsentDateGubun3[]>([]);
    const [ds_oAbsentDateGubun4, setds_oAbsentDateGubun4] = useState<Ids_oAbsentDateGubun4[]>([]);
    const [ds_oAbsentDateGubun5, setds_oAbsentDateGubun5] = useState<Ids_oAbsentDateGubun5[]>([]);
    const [ds_oAbsentDateGubun6, setds_oAbsentDateGubun6] = useState<Ids_oAbsentDateGubun6[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingAbsent([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oAbsentDateGubun([]);
            setds_oTrainingJubsuCnt([]);
            setds_oAbsentDateGubun1([]);
            setds_oAbsentDateGubun2([]);
            setds_oAbsentDateGubun3([]);
            setds_oAbsentDateGubun4([]);
            setds_oAbsentDateGubun5([]);
            setds_oAbsentDateGubun6([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancelAbsent_OnClick = () => {
        console.log('btnCancelAbsent_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_SaveAttendance = () => {
        console.log('lfn_SaveAttendance clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioTrainingAbsent,
        ds_oCourse,
        ds_oJibu,
        ds_oAbsentDateGubun,
        ds_oTrainingJubsuCnt,
        ds_oAbsentDateGubun1,
        ds_oAbsentDateGubun2,
        ds_oAbsentDateGubun3,
        ds_oAbsentDateGubun4,
        ds_oAbsentDateGubun5,
        ds_oAbsentDateGubun6,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnCancelAbsent_OnClick,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_SaveAttendance,
        lfn_Search,
    };
};