// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCyberLearning } from './Frmtraining0020PTrainingCyberInfoData';

export const useFrmtraining0020PTrainingCyberInfo = () => {
    const [ds_oCyberLearning, setds_oCyberLearning] = useState<Ids_oCyberLearning[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_lbTrainingPersonInfo, setRawVisible_lbTrainingPersonInfo] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbTrainingInfo1, setRawVisible_lbTrainingInfo1] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_AxMsie, setRawVisible_AxMsie] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox1;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_lbTrainingPersonInfo = rawVisible_lbTrainingPersonInfo;
    const setIsVisible_lbTrainingPersonInfo = setRawVisible_lbTrainingPersonInfo;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbTrainingInfo1 = rawVisible_lbTrainingInfo1 && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingInfo1 = setRawVisible_lbTrainingInfo1;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox1;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_shpGubunBox1;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_shpGubunBox1;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_shpGubunBox1;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_shpGubunBox1;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_shpGubunBox1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_AxMsie = rawVisible_AxMsie;
    const setIsVisible_AxMsie = setRawVisible_AxMsie;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_shpGubunBox1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_shpGubunBox1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_shpGubunBox1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_shpGubunBox1;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_shpGubunBox1;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_shpGubunBox1;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_shpGubunBox1;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_shpGubunBox1;
    const setIsVisible_Static17 = setRawVisible_Static17;

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
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_lbTrainingPersonInfo,
        setIsVisible_lbTrainingPersonInfo,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbTrainingInfo1,
        setIsVisible_lbTrainingInfo1,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_AxMsie,
        setIsVisible_AxMsie,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        lfn_End,
    };
};