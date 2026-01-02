// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oProfGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioProfBasicInfo {
    INSACODE: string;
    PFEDATE: string;
    PFGUBUN: string;
    PFNM: string;
    PFREMARK: string;
    PFTEAM: string;
    JIKRYUL: string;
    PFGUBUN2: string;
    PFGUBUN3: string;
    PFSTARTDATE: string;
    PFENDDATE: string;
    PFJIBU: string;
}

export interface Ids_ioProfPersonSchool {
    HCNM: string;
    PSNAME: string;
    PSSABUN: string;
    PSSUBJECT: string;
}

export interface Ids_oProfGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_oProfGubun3 {
    CD: string;
    DATA: string;
}

export interface Ids_PFJIBU {
    CD: string;
    DATA: string;
}

export interface Ids_ioListDelete {
    SEL: string;
}

export const useFrmprofes0001S01ProfMgmt = () => {
    const [ds_oProfGubun, setds_oProfGubun] = useState<Ids_oProfGubun[]>([]);
    const [ds_ioProfBasicInfo, setds_ioProfBasicInfo] = useState<Ids_ioProfBasicInfo[]>([]);
    const [ds_ioProfPersonSchool, setds_ioProfPersonSchool] = useState<Ids_ioProfPersonSchool[]>([]);
    const [ds_oProfGubun2, setds_oProfGubun2] = useState<Ids_oProfGubun2[]>([]);
    const [ds_oProfGubun3, setds_oProfGubun3] = useState<Ids_oProfGubun3[]>([]);
    const [ds_PFJIBU, setds_PFJIBU] = useState<Ids_PFJIBU[]>([]);
    const [ds_ioListDelete, setds_ioListDelete] = useState<Ids_ioListDelete[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oProfGubun([]);
            setds_ioProfBasicInfo([]);
            setds_ioProfPersonSchool([]);
            setds_oProfGubun2([]);
            setds_oProfGubun3([]);
            setds_PFJIBU([]);
            setds_ioListDelete([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnReport_OnClick = () => {
        console.log('btnReport_OnClick clicked');
    };
    const btnSearchUser_OnClick = () => {
        console.log('btnSearchUser_OnClick clicked');
    };
    const btn_Delete_OnClick = () => {
        console.log('btn_Delete_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oProfGubun,
        ds_ioProfBasicInfo,
        ds_ioProfPersonSchool,
        ds_oProfGubun2,
        ds_oProfGubun3,
        ds_PFJIBU,
        ds_ioListDelete,
        btnReport_OnClick,
        btnSearchUser_OnClick,
        btn_Delete_OnClick,
        lfn_End,
    };
};