// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oPosPrintm } from './FrmCOM8051SSettlementPOSRepayData';

export const useFrmCOM8051SSettlementPOSRepay = () => {
    const [ds_oPosPrintm, setds_oPosPrintm] = useState<Ids_oPosPrintm[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_lbPersonNm1, setRawVisible_lbPersonNm1] = useState(true);
    const [rawVisible_lbOrderNo1, setRawVisible_lbOrderNo1] = useState(true);
    const [rawVisible_edOrderNo1, setRawVisible_edOrderNo1] = useState(true);
    const [rawVisible_edPersonNm1, setRawVisible_edPersonNm1] = useState(true);
    const [rawVisible_lbRepayAmount1, setRawVisible_lbRepayAmount1] = useState(true);
    const [rawVisible_lbRepay, setRawVisible_lbRepay] = useState(true);
    const [rawVisible_lbSunapGubun1, setRawVisible_lbSunapGubun1] = useState(true);
    const [rawVisible_edSunapGubun1, setRawVisible_edSunapGubun1] = useState(true);
    const [rawVisible_medRepayAmount1, setRawVisible_medRepayAmount1] = useState(true);
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_lbPersonNm1 = rawVisible_lbPersonNm1 && rawVisible_shpGubunBox4;
    const setIsVisible_lbPersonNm1 = setRawVisible_lbPersonNm1;
    const isVisible_lbOrderNo1 = rawVisible_lbOrderNo1 && rawVisible_shpGubunBox4;
    const setIsVisible_lbOrderNo1 = setRawVisible_lbOrderNo1;
    const isVisible_edOrderNo1 = rawVisible_edOrderNo1 && rawVisible_shpGubunBox4;
    const setIsVisible_edOrderNo1 = setRawVisible_edOrderNo1;
    const isVisible_edPersonNm1 = rawVisible_edPersonNm1 && rawVisible_shpGubunBox4;
    const setIsVisible_edPersonNm1 = setRawVisible_edPersonNm1;
    const isVisible_lbRepayAmount1 = rawVisible_lbRepayAmount1 && rawVisible_shpGubunBox4;
    const setIsVisible_lbRepayAmount1 = setRawVisible_lbRepayAmount1;
    const isVisible_lbRepay = rawVisible_lbRepay;
    const setIsVisible_lbRepay = setRawVisible_lbRepay;
    const isVisible_lbSunapGubun1 = rawVisible_lbSunapGubun1 && rawVisible_shpGubunBox4;
    const setIsVisible_lbSunapGubun1 = setRawVisible_lbSunapGubun1;
    const isVisible_edSunapGubun1 = rawVisible_edSunapGubun1 && rawVisible_shpGubunBox4;
    const setIsVisible_edSunapGubun1 = setRawVisible_edSunapGubun1;
    const isVisible_medRepayAmount1 = rawVisible_medRepayAmount1 && rawVisible_shpGubunBox4;
    const setIsVisible_medRepayAmount1 = setRawVisible_medRepayAmount1;

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