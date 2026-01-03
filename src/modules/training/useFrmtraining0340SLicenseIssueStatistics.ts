// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCourse, Ids_oPrtGubun, Ids_oStatusGubun } from './Frmtraining0340SLicenseIssueStatisticsData';

export const useFrmtraining0340SLicenseIssueStatistics = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oPrtGubun, setds_oPrtGubun] = useState<Ids_oPrtGubun[]>([]);
    const [ds_oStatusGubun, setds_oStatusGubun] = useState<Ids_oStatusGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oPrtGubun([]);
            setds_oStatusGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oJibu,
        ds_oCourse,
        ds_oPrtGubun,
        ds_oStatusGubun,
    };
};