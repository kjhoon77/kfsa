// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun_0 {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust7040PEduSearch = () => {
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioMemberGubun_0, setds_ioMemberGubun_0] = useState<Ids_ioMemberGubun_0[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberGubun([]);
            setds_ioOrder([]);
            setds_ioMemberGubun_0([]);
            setds_ioChoiceYn([]);
            setds_ioGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnListPrint2_OnClick = () => {
        console.log('btnListPrint2_OnClick clicked');
    };
    const btnListPrint_OnClick = () => {
        console.log('btnListPrint_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioMemberGubun,
        ds_ioOrder,
        ds_ioMemberGubun_0,
        ds_ioChoiceYn,
        ds_ioGubun,
        btnListPrint2_OnClick,
        btnListPrint_OnClick,
        lfn_End,
    };
};