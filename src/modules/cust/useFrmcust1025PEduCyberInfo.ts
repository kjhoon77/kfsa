// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCyberLearning {
    CLPROGRESSPCT: string;
    CLPROGRESSSCORE: string;
    CLEXAMSCORE: string;
    CLHOMEWORKSCORE: string;
    CLDISCUSSSCORE: string;
    CLPASSSCORE: string;
    CJTJMGNO: string;
    CCCOURSECD: string;
    CCEDUGUBUN: string;
    CJYEAR: string;
    CJGTMGNO: string;
    CJTRAINNINGORDER: string;
    CJJUBSUNO: string;
}

export const useFrmcust1025PEduCyberInfo = () => {
    const [ds_oCyberLearning, setds_oCyberLearning] = useState<Ids_oCyberLearning[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCyberLearning([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oCyberLearning,
        lfn_End,
    };
};