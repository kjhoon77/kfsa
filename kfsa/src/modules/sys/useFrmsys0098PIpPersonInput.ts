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
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_edUser, setIsVisible_edUser] = useState(true);
    const [isVisible_btnInput, setIsVisible_btnInput] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_lbBuildingInfo, setIsVisible_lbBuildingInfo] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_lbUser, setIsVisible_lbUser] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edNM, setIsVisible_edNM] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_edSabun, setIsVisible_edSabun] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_cbxJibu2, setIsVisible_cbxJibu2] = useState(true);
    const [isVisible_chkCallYN, setIsVisible_chkCallYN] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_edPOSITNNM, setIsVisible_edPOSITNNM] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_chkUserYN, setIsVisible_chkUserYN] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Combo0, setIsVisible_Combo0] = useState(true);

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