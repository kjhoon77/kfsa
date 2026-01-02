// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_Chk {
    CD: string;
    DATA: string;
}

export const useFrmcust3030PLicenseGubun = () => {
    const [ds_Chk, setds_Chk] = useState<Ids_Chk[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_Chk([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSearchPersonInfo_OnClick = () => {
        console.log('btnSearchPersonInfo_OnClick clicked');
    };

    return {
        isLoading,
        ds_Chk,
        btnSearchPersonInfo_OnClick,
    };
};