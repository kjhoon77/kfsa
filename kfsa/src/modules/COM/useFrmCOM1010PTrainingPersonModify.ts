// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingPerson, Ids_ModifyGubun, Ids_oModifyColumn, Ids_oTrainingCheck } from './FrmCOM1010PTrainingPersonModifyData';

export const useFrmCOM1010PTrainingPersonModify = () => {
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [ds_ModifyGubun, setds_ModifyGubun] = useState<Ids_ModifyGubun[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_oTrainingCheck, setds_oTrainingCheck] = useState<Ids_oTrainingCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_lbText02, setRawVisible_lbText02] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPersonNm1, setRawVisible_lbPersonNm1] = useState(true);
    const [rawVisible_edPersonNm1, setRawVisible_edPersonNm1] = useState(true);
    const [rawVisible_lbResidentNo1, setRawVisible_lbResidentNo1] = useState(true);
    const [rawVisible_medBirthday1, setRawVisible_medBirthday1] = useState(true);
    const [rawVisible_lbPersonNm2, setRawVisible_lbPersonNm2] = useState(true);
    const [rawVisible_edPersonNm2, setRawVisible_edPersonNm2] = useState(true);
    const [rawVisible_lbResidentNo2, setRawVisible_lbResidentNo2] = useState(true);
    const [rawVisible_medResidentNo2, setRawVisible_medResidentNo2] = useState(true);
    const [rawVisible_lbPersonInfo, setRawVisible_lbPersonInfo] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_radModifyGubun, setRawVisible_radModifyGubun] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbText01, setRawVisible_lbText01] = useState(false);
    const [rawVisible_btnAuthResidentNo, setRawVisible_btnAuthResidentNo] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_EdTpmgno, setRawVisible_EdTpmgno] = useState(false);
    const [rawVisible_lbTpmgno, setRawVisible_lbTpmgno] = useState(false);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_lbPersonKey, setRawVisible_lbPersonKey] = useState(true);
    const [rawVisible_medPersonKey1, setRawVisible_medPersonKey1] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_medPersonKey2, setRawVisible_medPersonKey2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_medHP1, setRawVisible_medHP1] = useState(true);
    const [rawVisible_medHP2, setRawVisible_medHP2] = useState(true);
    const [rawVisible_lbText03, setRawVisible_lbText03] = useState(false);
    const [rawVisible_lbText04, setRawVisible_lbText04] = useState(false);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_lbText02 = rawVisible_lbText02 && rawVisible_Shape1;
    const setIsVisible_lbText02 = setRawVisible_lbText02;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbPersonNm1 = rawVisible_lbPersonNm1 && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm1 = setRawVisible_lbPersonNm1;
    const isVisible_edPersonNm1 = rawVisible_edPersonNm1 && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm1 = setRawVisible_edPersonNm1;
    const isVisible_lbResidentNo1 = rawVisible_lbResidentNo1 && rawVisible_shpGubunBox3;
    const setIsVisible_lbResidentNo1 = setRawVisible_lbResidentNo1;
    const isVisible_medBirthday1 = rawVisible_medBirthday1 && rawVisible_shpGubunBox3;
    const setIsVisible_medBirthday1 = setRawVisible_medBirthday1;
    const isVisible_lbPersonNm2 = rawVisible_lbPersonNm2 && rawVisible_Shape0;
    const setIsVisible_lbPersonNm2 = setRawVisible_lbPersonNm2;
    const isVisible_edPersonNm2 = rawVisible_edPersonNm2 && rawVisible_Shape0;
    const setIsVisible_edPersonNm2 = setRawVisible_edPersonNm2;
    const isVisible_lbResidentNo2 = rawVisible_lbResidentNo2 && rawVisible_Shape0;
    const setIsVisible_lbResidentNo2 = setRawVisible_lbResidentNo2;
    const isVisible_medResidentNo2 = rawVisible_medResidentNo2 && rawVisible_Shape0;
    const setIsVisible_medResidentNo2 = setRawVisible_medResidentNo2;
    const isVisible_lbPersonInfo = rawVisible_lbPersonInfo && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonInfo = setRawVisible_lbPersonInfo;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_radModifyGubun = rawVisible_radModifyGubun && rawVisible_Shape1;
    const setIsVisible_radModifyGubun = setRawVisible_radModifyGubun;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbText01 = rawVisible_lbText01 && rawVisible_Shape1;
    const setIsVisible_lbText01 = setRawVisible_lbText01;
    const isVisible_btnAuthResidentNo = rawVisible_btnAuthResidentNo && rawVisible_Shape0;
    const setIsVisible_btnAuthResidentNo = setRawVisible_btnAuthResidentNo;
    const isVisible_btnSave = rawVisible_btnSave;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_EdTpmgno = rawVisible_EdTpmgno;
    const setIsVisible_EdTpmgno = setRawVisible_EdTpmgno;
    const isVisible_lbTpmgno = rawVisible_lbTpmgno;
    const setIsVisible_lbTpmgno = setRawVisible_lbTpmgno;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_lbPersonKey = rawVisible_lbPersonKey && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonKey = setRawVisible_lbPersonKey;
    const isVisible_medPersonKey1 = rawVisible_medPersonKey1 && rawVisible_shpGubunBox3;
    const setIsVisible_medPersonKey1 = setRawVisible_medPersonKey1;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_Shape0;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_medPersonKey2 = rawVisible_medPersonKey2 && rawVisible_Shape0;
    const setIsVisible_medPersonKey2 = setRawVisible_medPersonKey2;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_medHP1 = rawVisible_medHP1 && rawVisible_shpGubunBox3;
    const setIsVisible_medHP1 = setRawVisible_medHP1;
    const isVisible_medHP2 = rawVisible_medHP2 && rawVisible_Shape0;
    const setIsVisible_medHP2 = setRawVisible_medHP2;
    const isVisible_lbText03 = rawVisible_lbText03;
    const setIsVisible_lbText03 = setRawVisible_lbText03;
    const isVisible_lbText04 = rawVisible_lbText04 && rawVisible_Shape1;
    const setIsVisible_lbText04 = setRawVisible_lbText04;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingPerson([]);
            setds_ModifyGubun([]);
            setds_oModifyColumn([]);
            setds_oTrainingCheck([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioTrainingPerson,
        ds_ModifyGubun,
        ds_oModifyColumn,
        ds_oTrainingCheck,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_lbText02,
        setIsVisible_lbText02,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbPersonNm1,
        setIsVisible_lbPersonNm1,
        isVisible_edPersonNm1,
        setIsVisible_edPersonNm1,
        isVisible_lbResidentNo1,
        setIsVisible_lbResidentNo1,
        isVisible_medBirthday1,
        setIsVisible_medBirthday1,
        isVisible_lbPersonNm2,
        setIsVisible_lbPersonNm2,
        isVisible_edPersonNm2,
        setIsVisible_edPersonNm2,
        isVisible_lbResidentNo2,
        setIsVisible_lbResidentNo2,
        isVisible_medResidentNo2,
        setIsVisible_medResidentNo2,
        isVisible_lbPersonInfo,
        setIsVisible_lbPersonInfo,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_radModifyGubun,
        setIsVisible_radModifyGubun,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbText01,
        setIsVisible_lbText01,
        isVisible_btnAuthResidentNo,
        setIsVisible_btnAuthResidentNo,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_EdTpmgno,
        setIsVisible_EdTpmgno,
        isVisible_lbTpmgno,
        setIsVisible_lbTpmgno,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_lbPersonKey,
        setIsVisible_lbPersonKey,
        isVisible_medPersonKey1,
        setIsVisible_medPersonKey1,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_medPersonKey2,
        setIsVisible_medPersonKey2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_medHP1,
        setIsVisible_medHP1,
        isVisible_medHP2,
        setIsVisible_medHP2,
        isVisible_lbText03,
        setIsVisible_lbText03,
        isVisible_lbText04,
        setIsVisible_lbText04,
        btnAuthResidentNo_OnClick,
        lfn_End,
        lfn_Save,
    };
};