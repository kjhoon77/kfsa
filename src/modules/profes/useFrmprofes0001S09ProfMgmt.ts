// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioProfTeachingPlan {
    CNT: string;
    TPYEAR: string;
}

export interface Ids_ioProfTeachingPlanCnt {
    YEAR1: string;
    YEAR2: string;
    YEAR3: string;
    YEAR4: string;
    YEAR5: string;
    YEAR6: string;
    YEAR7: string;
    YEAR8: string;
    YEAR9: string;
}

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