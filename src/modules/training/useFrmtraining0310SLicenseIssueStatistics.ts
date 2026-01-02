// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oIssueGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oPrtGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oStatusGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0310SLicenseIssueStatistics = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oIssueGubun, setds_oIssueGubun] = useState<Ids_oIssueGubun[]>([]);
    const [ds_oPrtGubun, setds_oPrtGubun] = useState<Ids_oPrtGubun[]>([]);
    const [ds_oStatusGubun, setds_oStatusGubun] = useState<Ids_oStatusGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oIssueGubun([]);
            setds_oPrtGubun([]);
            setds_oStatusGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oCourse,
        ds_oJibu,
        ds_oIssueGubun,
        ds_oPrtGubun,
        ds_oStatusGubun,
    };
};