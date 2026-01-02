// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfTeachingPlan, Ids_ioProfTeachingPlanCnt } from './Frmprofes0001S09ProfMgmtData';

export const useFrmprofes0001S09ProfMgmt = () => {
    const [ds_ioProfTeachingPlan, setds_ioProfTeachingPlan] = useState<Ids_ioProfTeachingPlan[]>([]);
    const [ds_ioProfTeachingPlanCnt, setds_ioProfTeachingPlanCnt] = useState<Ids_ioProfTeachingPlanCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfTeachingPlan([]);
            setds_ioProfTeachingPlanCnt([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioProfTeachingPlan,
        ds_ioProfTeachingPlanCnt,
    };
};