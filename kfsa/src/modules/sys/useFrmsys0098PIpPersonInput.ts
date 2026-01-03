// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioUser, Ids_oJibu, Ids_ioCallYN, Ids_ioUSEYN, Ids_ioUserYN, Ids_ioIPUSERGUBUN } from './Frmsys0098PIpPersonInputData';

export const useFrmsys0098PIpPersonInput = () => {
    const [ds_ioUser, setds_ioUser] = useState<Ids_ioUser[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioCallYN, setds_ioCallYN] = useState<Ids_ioCallYN[]>([]);
    const [ds_ioUSEYN, setds_ioUSEYN] = useState<Ids_ioUSEYN[]>([]);
    const [ds_ioUserYN, setds_ioUserYN] = useState<Ids_ioUserYN[]>([]);
    const [ds_ioIPUSERGUBUN, setds_ioIPUSERGUBUN] = useState<Ids_ioIPUSERGUBUN[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_edUser, setRawVisible_edUser] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_lbBuildingInfo, setRawVisible_lbBuildingInfo] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_lbUser, setRawVisible_lbUser] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edNM, setRawVisible_edNM] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_edSabun, setRawVisible_edSabun] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_cbxJibu2, setRawVisible_cbxJibu2] = useState(true);
    const [rawVisible_chkCallYN, setRawVisible_chkCallYN] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edPOSITNNM, setRawVisible_edPOSITNNM] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_chkUserYN, setRawVisible_chkUserYN] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Combo0, setRawVisible_Combo0] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_edUser = rawVisible_edUser && rawVisible_shpGubunBox;
    const setIsVisible_edUser = setRawVisible_edUser;
    const isVisible_btnInput = rawVisible_btnInput && rawVisible_shpBtnBox;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_lbBuildingInfo = rawVisible_lbBuildingInfo && rawVisible_shpGubunBox;
    const setIsVisible_lbBuildingInfo = setRawVisible_lbBuildingInfo;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_lbUser = rawVisible_lbUser && rawVisible_shpGubunBox;
    const setIsVisible_lbUser = setRawVisible_lbUser;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edNM = rawVisible_edNM && rawVisible_Shape0;
    const setIsVisible_edNM = setRawVisible_edNM;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_edSabun = rawVisible_edSabun && rawVisible_Shape0;
    const setIsVisible_edSabun = setRawVisible_edSabun;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cbxJibu2 = rawVisible_cbxJibu2 && rawVisible_Shape0;
    const setIsVisible_cbxJibu2 = setRawVisible_cbxJibu2;
    const isVisible_chkCallYN = rawVisible_chkCallYN && rawVisible_Shape0;
    const setIsVisible_chkCallYN = setRawVisible_chkCallYN;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape0;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edPOSITNNM = rawVisible_edPOSITNNM && rawVisible_Shape0;
    const setIsVisible_edPOSITNNM = setRawVisible_edPOSITNNM;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_chkUserYN = rawVisible_chkUserYN && rawVisible_Shape0;
    const setIsVisible_chkUserYN = setRawVisible_chkUserYN;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Combo0 = rawVisible_Combo0 && rawVisible_Shape0;
    const setIsVisible_Combo0 = setRawVisible_Combo0;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioUser([]);
            setds_oJibu([]);
            setds_ioCallYN([]);
            setds_ioUSEYN([]);
            setds_ioUserYN([]);
            setds_ioIPUSERGUBUN([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioUser,
        ds_oJibu,
        ds_ioCallYN,
        ds_ioUSEYN,
        ds_ioUserYN,
        ds_ioIPUSERGUBUN,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_edUser,
        setIsVisible_edUser,
        isVisible_btnInput,
        setIsVisible_btnInput,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_lbBuildingInfo,
        setIsVisible_lbBuildingInfo,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_lbUser,
        setIsVisible_lbUser,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edNM,
        setIsVisible_edNM,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_edSabun,
        setIsVisible_edSabun,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_cbxJibu2,
        setIsVisible_cbxJibu2,
        isVisible_chkCallYN,
        setIsVisible_chkCallYN,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edPOSITNNM,
        setIsVisible_edPOSITNNM,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_chkUserYN,
        setIsVisible_chkUserYN,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Combo0,
        setIsVisible_Combo0,
        lfn_Cancel,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};