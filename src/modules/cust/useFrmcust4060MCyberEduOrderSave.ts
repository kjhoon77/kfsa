// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioYear {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    YEAR: string;
    BFYEAR: string;
    MONTH: string;
    DATE_FR: string;
    DATE_TO: string;
    BFMONTH: string;
}

export interface Ids_iCustomerInsert {
}

export interface Ids_oEduSchedule {
}

export const useFrmcust4060MCyberEduOrderSave = () => {
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_iCustomerInsert, setds_iCustomerInsert] = useState<Ids_iCustomerInsert[]>([]);
    const [ds_oEduSchedule, setds_oEduSchedule] = useState<Ids_oEduSchedule[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioYear([]);
            setds_SearchJogeon([]);
            setds_iCustomerInsert([]);
            setds_oEduSchedule([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioYear,
        ds_SearchJogeon,
        ds_iCustomerInsert,
        ds_oEduSchedule,
        lfn_End,
        lfn_Save,
        lfn_Search,
    };
};