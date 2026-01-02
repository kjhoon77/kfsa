// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oRadioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oNotification {
    CD: string;
    DATA: string;
}

export interface Ids_oLongNotSunap {
    CD: string;
    DATA: string;
}

export interface Ids_oNotification2 {
    CD: string;
    DATA: string;
}

export interface Ids_oNotification3 {
    CD: string;
    DATA: string;
}

export interface Ids_oOrderBy {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oNotMemberFirsSecondHalf {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oCourse_Minus {
    CD: string;
    DATA_A: string;
}

export interface Ids_ioCreateNotification {
    FGIJUN1: string;
}

export interface Ids_oSelectYN1 {
    CD: string;
    DATA: string;
}

export interface Ids_oSelectYN2 {
    CD: string;
    DATA: string;
}

export interface Ids_oReturn {
    CD: string;
    DATA: string;
}

export interface Ids_ioExcelLoad {
    col01: string;
    col02: string;
    col03: string;
    col04: string;
    col05: string;
    col06: string;
    col07: string;
    col08: string;
    col09: string;
    col10: string;
    col11: string;
    col12: string;
    col13: string;
    col14: string;
    col15: string;
    col16: string;
    col17: string;
    col18: string;
    col19: string;
    col20: string;
    col21: string;
    col22: string;
    col23: string;
    col24: string;
    col25: string;
    col26: string;
    col27: string;
    col28: string;
    col29: string;
    col30: string;
    col31: string;
    col32: string;
    col33: string;
    col34: string;
    col35: string;
    col36: string;
}

export interface Ids_oSelectYN3 {
    CD: string;
    DATA: string;
}

export interface Ids_ioNotificationJibge {
}

export interface Ids_ioNotificationTotaling {
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubunName {
    CD: string;
    DATA: string;
}

export interface Ids_oFeemode {
    CD: string;
    DATA: string;
}

export interface Ids_oRadioGubun2 {
    CD: string;
    DATA: string;
}

export const useFrmcust2160MEGrioGenerate = () => {
    const [ds_oRadioGubun, setds_oRadioGubun] = useState<Ids_oRadioGubun[]>([]);
    const [ds_oMemberGubun, setds_oMemberGubun] = useState<Ids_oMemberGubun[]>([]);
    const [ds_oNotification, setds_oNotification] = useState<Ids_oNotification[]>([]);
    const [ds_oLongNotSunap, setds_oLongNotSunap] = useState<Ids_oLongNotSunap[]>([]);
    const [ds_oNotification2, setds_oNotification2] = useState<Ids_oNotification2[]>([]);
    const [ds_oNotification3, setds_oNotification3] = useState<Ids_oNotification3[]>([]);
    const [ds_oOrderBy, setds_oOrderBy] = useState<Ids_oOrderBy[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oNotMemberFirsSecondHalf, setds_oNotMemberFirsSecondHalf] = useState<Ids_oNotMemberFirsSecondHalf[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oCourse_Minus, setds_oCourse_Minus] = useState<Ids_oCourse_Minus[]>([]);
    const [ds_ioCreateNotification, setds_ioCreateNotification] = useState<Ids_ioCreateNotification[]>([]);
    const [ds_oSelectYN1, setds_oSelectYN1] = useState<Ids_oSelectYN1[]>([]);
    const [ds_oSelectYN2, setds_oSelectYN2] = useState<Ids_oSelectYN2[]>([]);
    const [ds_oReturn, setds_oReturn] = useState<Ids_oReturn[]>([]);
    const [ds_ioExcelLoad, setds_ioExcelLoad] = useState<Ids_ioExcelLoad[]>([]);
    const [ds_oSelectYN3, setds_oSelectYN3] = useState<Ids_oSelectYN3[]>([]);
    const [ds_ioNotificationJibge, setds_ioNotificationJibge] = useState<Ids_ioNotificationJibge[]>([]);
    const [ds_ioNotificationTotaling, setds_ioNotificationTotaling] = useState<Ids_ioNotificationTotaling[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioMemberGubunName, setds_ioMemberGubunName] = useState<Ids_ioMemberGubunName[]>([]);
    const [ds_oFeemode, setds_oFeemode] = useState<Ids_oFeemode[]>([]);
    const [ds_oRadioGubun2, setds_oRadioGubun2] = useState<Ids_oRadioGubun2[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oRadioGubun([]);
            setds_oMemberGubun([]);
            setds_oNotification([]);
            setds_oLongNotSunap([]);
            setds_oNotification2([]);
            setds_oNotification3([]);
            setds_oOrderBy([]);
            setds_ioCourseYn([]);
            setds_oJibu([]);
            setds_oNotMemberFirsSecondHalf([]);
            setds_oRegion([]);
            setds_oCourse_Minus([]);
            setds_ioCreateNotification([]);
            setds_oSelectYN1([]);
            setds_oSelectYN2([]);
            setds_oReturn([]);
            setds_ioExcelLoad([]);
            setds_oSelectYN3([]);
            setds_ioNotificationJibge([]);
            setds_ioNotificationTotaling([]);
            setds_oCourse([]);
            setds_ioMemberGubunName([]);
            setds_oFeemode([]);
            setds_oRadioGubun2([]);
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Print_A = () => {
        console.log('lfn_Print_A clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oRadioGubun,
        ds_oMemberGubun,
        ds_oNotification,
        ds_oLongNotSunap,
        ds_oNotification2,
        ds_oNotification3,
        ds_oOrderBy,
        ds_ioCourseYn,
        ds_oJibu,
        ds_oNotMemberFirsSecondHalf,
        ds_oRegion,
        ds_oCourse_Minus,
        ds_ioCreateNotification,
        ds_oSelectYN1,
        ds_oSelectYN2,
        ds_oReturn,
        ds_ioExcelLoad,
        ds_oSelectYN3,
        ds_ioNotificationJibge,
        ds_ioNotificationTotaling,
        ds_oCourse,
        ds_ioMemberGubunName,
        ds_oFeemode,
        ds_oRadioGubun2,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Print_A,
        lfn_Save,
        lfn_localExcel,
    };
};