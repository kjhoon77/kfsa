// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oEducationPlace {
    CREATE_DATE: string;
    CREATE_ID: string;
    JJIBUCD: string;
    MODIFY_DATE: string;
    MODIFY_ID: string;
    ZBUNJI: string;
    SIKUDONG: string;
    ZHO: string;
    ZREGIONCD: string;
    ZSEQ: string;
    ZZIPCD: string;
}

export const useFrmCOM1200PImageView = () => {
    const [ds_oEducationPlace, setds_oEducationPlace] = useState<Ids_oEducationPlace[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEducationPlace([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const imgImage_OnClick = () => {
        console.log('imgImage_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oEducationPlace,
        btnDownload_OnClick,
        imgImage_OnClick,
        lfn_End,
    };
};