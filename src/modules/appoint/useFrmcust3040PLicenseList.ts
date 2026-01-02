// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingList {
    SEL: string;
    GTTEAMNM: string;
    TOMGGTMGNO: string;
    TCCOURSENM: string;
    TOHJUBSUNO: string;
    TJREGDATE: string;
    TOSTARTDATE: string;
    TOENDDATE: string;
}

export interface Ids_oExamList {
    SEL: string;
    GTTEAMNM: string;
    EOMGGTMGNO: string;
    TCCOURSENM: string;
    EOHJUBSUNO: string;
    EJREGDATE: string;
    EOEXAMDATE: string;
}

export interface Ids_iGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust3040PLicenseList = () => {
    const [ds_oTrainingList, setds_oTrainingList] = useState<Ids_oTrainingList[]>([]);
    const [ds_oExamList, setds_oExamList] = useState<Ids_oExamList[]>([]);
    const [ds_iGubun, setds_iGubun] = useState<Ids_iGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingList([]);
            setds_oExamList([]);
            setds_iGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oTrainingList,
        ds_oExamList,
        ds_iGubun,
        btnSelect_OnClick,
        lfn_End,
    };
};