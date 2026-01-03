// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oPosPrintm } from './FrmCOM3051SSettlementPOSRepayData';

export const useFrmCOM3051SSettlementPOSRepay = () => {
    const [ds_oPosPrintm, setds_oPosPrintm] = useState<Ids_oPosPrintm[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_lbPersonNm1, setIsVisible_lbPersonNm1] = useState(true);
    const [isVisible_lbOrderNo1, setIsVisible_lbOrderNo1] = useState(true);
    const [isVisible_edOrderNo1, setIsVisible_edOrderNo1] = useState(true);
    const [isVisible_edPersonNm1, setIsVisible_edPersonNm1] = useState(true);
    const [isVisible_lbRepayAmount1, setIsVisible_lbRepayAmount1] = useState(true);
    const [isVisible_lbRepay, setIsVisible_lbRepay] = useState(true);
    const [isVisible_lbSunapGubun1, setIsVisible_lbSunapGubun1] = useState(true);
    const [isVisible_edSunapGubun1, setIsVisible_edSunapGubun1] = useState(true);
    const [isVisible_medRepayAmount1, setIsVisible_medRepayAmount1] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPosPrintm([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oPosPrintm,
        isVisible_shpGubunBox4,
        setIsVisible_shpGubunBox4,
        isVisible_lbPersonNm1,
        setIsVisible_lbPersonNm1,
        isVisible_lbOrderNo1,
        setIsVisible_lbOrderNo1,
        isVisible_edOrderNo1,
        setIsVisible_edOrderNo1,
        isVisible_edPersonNm1,
        setIsVisible_edPersonNm1,
        isVisible_lbRepayAmount1,
        setIsVisible_lbRepayAmount1,
        isVisible_lbRepay,
        setIsVisible_lbRepay,
        isVisible_lbSunapGubun1,
        setIsVisible_lbSunapGubun1,
        isVisible_edSunapGubun1,
        setIsVisible_edSunapGubun1,
        isVisible_medRepayAmount1,
        setIsVisible_medRepayAmount1,
    };
};