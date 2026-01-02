// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingPerson {
    IIDIRPATH: string;
    IIREALNM: string;
    TPAUTHYN: string;
    TPCUSTGUBUN: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPLASTIMGSEQ: string;
    TPMGNO: string;
    TPNM: string;
    TPRESIDENTNO: string;
    TPTEL: string;
    TPADDR_A: string;
    TPZIPCD: string;
    TPADDR1: string;
    TPADDR2: string;
    RECENTLYDATE: string;
    IIREGDATE: string;
    TPADDRGUBUN: string;
    TPRPNUCD: string;
    TPRROADBUILDMGNO: string;
    TPRROADDETAIL: string;
    TPRROADREMAIN: string;
    TPRSANGUBUN: string;
    TPRMAINBUNJI: string;
    TPRSUBBUNJI: string;
    TPRBUILDNM: string;
    TPRADDRETC: string;
    TPRCONVPGM: string;
    TPRCONVSTATUS: string;
    IIIMGBINARY: string;
}

export const useFrmCOM1000PPersonInfoList = () => {
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_SearchKey = () => {
        console.log('lfn_SearchKey clicked');
    };

    return {
        isLoading,
        ds_oTrainingPerson,
        btnSelect_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Search,
        lfn_SearchKey,
    };
};