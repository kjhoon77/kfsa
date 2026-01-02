// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oEducationPlace {
    EPDIRPATH: string;
    EPMGGTMGNO: string;
    EPMGNO: string;
    EPMODDATE: string;
    EPMODSABUN: string;
    EPNM: string;
    EPPARKINGINFO: string;
    EPREALNM: string;
    EPREGDATE: string;
    EPREGSABUN: string;
    EPRREGIONCD: string;
    EPSAVENM: string;
    FILECHECK: string;
    GTDEPTNM: string;
}

export const useFrmtraining9001PEducationPlaceList = () => {
    const [ds_oEducationPlace, setds_oEducationPlace] = useState<Ids_oEducationPlace[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEducationPlace([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oEducationPlace,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};