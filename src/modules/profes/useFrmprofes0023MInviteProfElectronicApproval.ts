// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_Professor {
    ATM_SMMGNO: string;
    SMJIBUNM: string;
    ATDYEAR: string;
    ATDSDNAME: string;
    ATM_RE_ALI_DOC_ID: string;
    ATM_RE_APPROVER_STATUS: string;
    AVM_SMMGNO: string;
    AVM_RE_ALI_DOC_ID: string;
    AVM_RE_APPROVER_STATUS: string;
}

export interface Ids_Jibu {
    CD: string;
    DATA: string;
}

export interface Ids_Approval {
    CD: string;
    DATA: string;
}

export const useFrmprofes0023MInviteProfElectronicApproval = () => {
    const [ds_Professor, setds_Professor] = useState<Ids_Professor[]>([]);
    const [ds_Jibu, setds_Jibu] = useState<Ids_Jibu[]>([]);
    const [ds_Approval, setds_Approval] = useState<Ids_Approval[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_Professor([]);
            setds_Jibu([]);
            setds_Approval([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_Professor,
        ds_Jibu,
        ds_Approval,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};