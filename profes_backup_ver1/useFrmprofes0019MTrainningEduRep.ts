// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ProfesListH, Ids_SearchJogeon, Ids_oJibu, Ids_ProfesListD, Ids_ioCourseGubun, Ids_position } from './Frmprofes0019MTrainningEduRepData';

export const useFrmprofes0019MTrainningEduRep = () => {
    const [ds_ProfesListH, setds_ProfesListH] = useState<Ids_ProfesListH[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesListD, setds_ProfesListD] = useState<Ids_ProfesListD[]>([]);
    const [ds_ioCourseGubun, setds_ioCourseGubun] = useState<Ids_ioCourseGubun[]>([]);
    const [ds_position, setds_position] = useState<Ids_position[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_calDateFr, setRawVisible_calDateFr] = useState(true);
    const [rawVisible_calDateTo, setRawVisible_calDateTo] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_gdListH, setRawVisible_gdListH] = useState(true);
    const [rawVisible_gdListD, setRawVisible_gdListD] = useState(true);
    const [rawVisible_lbTrainingPersonInfo, setRawVisible_lbTrainingPersonInfo] = useState(true);
    const [rawVisible_lbTrainingPersonInfoDetail, setRawVisible_lbTrainingPersonInfoDetail] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_radCourseGubun, setRawVisible_radCourseGubun] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_edTrainingOrderStart, setRawVisible_edTrainingOrderStart] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_edTrainingOrderEnd, setRawVisible_edTrainingOrderEnd] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_calDateFr = rawVisible_calDateFr && rawVisible_shpGubunBox;
    const setIsVisible_calDateFr = setRawVisible_calDateFr;
    const isVisible_calDateTo = rawVisible_calDateTo && rawVisible_shpGubunBox;
    const setIsVisible_calDateTo = setRawVisible_calDateTo;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_gdListH = rawVisible_gdListH && rawVisible_shpGubunBox3;
    const setIsVisible_gdListH = setRawVisible_gdListH;
    const isVisible_gdListD = rawVisible_gdListD && rawVisible_Shape0;
    const setIsVisible_gdListD = setRawVisible_gdListD;
    const isVisible_lbTrainingPersonInfo = rawVisible_lbTrainingPersonInfo;
    const setIsVisible_lbTrainingPersonInfo = setRawVisible_lbTrainingPersonInfo;
    const isVisible_lbTrainingPersonInfoDetail = rawVisible_lbTrainingPersonInfoDetail;
    const setIsVisible_lbTrainingPersonInfoDetail = setRawVisible_lbTrainingPersonInfoDetail;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_radCourseGubun = rawVisible_radCourseGubun && rawVisible_shpGubunBox;
    const setIsVisible_radCourseGubun = setRawVisible_radCourseGubun;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_edTrainingOrderStart = rawVisible_edTrainingOrderStart && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrderStart = setRawVisible_edTrainingOrderStart;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave && rawVisible_shpGubunBox;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_edTrainingOrderEnd = rawVisible_edTrainingOrderEnd && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrderEnd = setRawVisible_edTrainingOrderEnd;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ProfesListH([]);
            setds_SearchJogeon([]);
            setds_oJibu([]);
            setds_ProfesListD([]);
            setds_ioCourseGubun([]);
            setds_position([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ProfesListH,
        ds_SearchJogeon,
        ds_oJibu,
        ds_ProfesListD,
        ds_ioCourseGubun,
        ds_position,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_calDateFr,
        setIsVisible_calDateFr,
        isVisible_calDateTo,
        setIsVisible_calDateTo,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_gdListH,
        setIsVisible_gdListH,
        isVisible_gdListD,
        setIsVisible_gdListD,
        isVisible_lbTrainingPersonInfo,
        setIsVisible_lbTrainingPersonInfo,
        isVisible_lbTrainingPersonInfoDetail,
        setIsVisible_lbTrainingPersonInfoDetail,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_radCourseGubun,
        setIsVisible_radCourseGubun,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_edTrainingOrderStart,
        setIsVisible_edTrainingOrderStart,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_edTrainingOrderEnd,
        setIsVisible_edTrainingOrderEnd,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};