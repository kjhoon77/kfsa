// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCourse, Ids_oYear, Ids_oPrtGubun, Ids_oStatusGubun } from './Frmtraining0345SLicenseIssueStatisticsData';

export const useFrmtraining0345SLicenseIssueStatistics = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oYear, setds_oYear] = useState<Ids_oYear[]>([]);
    const [ds_oPrtGubun, setds_oPrtGubun] = useState<Ids_oPrtGubun[]>([]);
    const [ds_oStatusGubun, setds_oStatusGubun] = useState<Ids_oStatusGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oYear([]);
            setds_oPrtGubun([]);
            setds_oStatusGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oJibu,
        ds_oCourse,
        ds_oYear,
        ds_oPrtGubun,
        ds_oStatusGubun,
    };
};