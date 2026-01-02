// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oJibu, Ids_oIssueGubun, Ids_oPrtGubun, Ids_oStatusGubun } from './Frmtraining0310SLicenseIssueStatisticsData';

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