// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioImageInfo, Ids_oApproval, Ids_ioTrainingPerson } from './Frmspcledu0255PTrainingPersonPictureData';

export const useFrmspcledu0255PTrainingPersonPicture = () => {
    const [ds_ioImageInfo, setds_ioImageInfo] = useState<Ids_ioImageInfo[]>([]);
    const [ds_oApproval, setds_oApproval] = useState<Ids_oApproval[]>([]);
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_gdImageInfo, setRawVisible_gdImageInfo] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbPersonName, setRawVisible_lbPersonName] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_lbRegGubun, setRawVisible_lbRegGubun] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_lbApproval, setRawVisible_lbApproval] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_radApproval, setRawVisible_radApproval] = useState(true);
    const [rawVisible_btnSelect, setRawVisible_btnSelect] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_edRegGubun, setRawVisible_edRegGubun] = useState(true);
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_gdImageInfo = rawVisible_gdImageInfo;
    const setIsVisible_gdImageInfo = setRawVisible_gdImageInfo;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbPersonName = rawVisible_lbPersonName && rawVisible_shpGubunBox;
    const setIsVisible_lbPersonName = setRawVisible_lbPersonName;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_shpGubunBox;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_shpGubunBox;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_lbRegGubun = rawVisible_lbRegGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbRegGubun = setRawVisible_lbRegGubun;
    const isVisible_imgPicture = rawVisible_imgPicture && rawVisible_shpGubunBox;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_lbApproval = rawVisible_lbApproval && rawVisible_shpGubunBox;
    const setIsVisible_lbApproval = setRawVisible_lbApproval;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_radApproval = rawVisible_radApproval && rawVisible_shpGubunBox;
    const setIsVisible_radApproval = setRawVisible_radApproval;
    const isVisible_btnSelect = rawVisible_btnSelect && rawVisible_shpBtnBox;
    const setIsVisible_btnSelect = setRawVisible_btnSelect;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_edRegGubun = rawVisible_edRegGubun && rawVisible_shpGubunBox;
    const setIsVisible_edRegGubun = setRawVisible_edRegGubun;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioImageInfo([]);
            setds_oApproval([]);
            setds_ioTrainingPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const imgPicture_OnClick = () => {
        console.log('imgPicture_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioImageInfo,
        ds_oApproval,
        ds_ioTrainingPerson,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_gdImageInfo,
        setIsVisible_gdImageInfo,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbPersonName,
        setIsVisible_lbPersonName,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_lbRegGubun,
        setIsVisible_lbRegGubun,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_lbApproval,
        setIsVisible_lbApproval,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_radApproval,
        setIsVisible_radApproval,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_edRegGubun,
        setIsVisible_edRegGubun,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        imgPicture_OnClick,
        lfn_End,
    };
};