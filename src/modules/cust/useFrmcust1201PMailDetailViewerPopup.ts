// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oViewMailDetail } from './Frmcust1201PMailDetailViewerPopupData';

export const useFrmcust1201PMailDetailViewerPopup = () => {
    const [ds_oViewMailDetail, setds_oViewMailDetail] = useState<Ids_oViewMailDetail[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oViewMailDetail([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oViewMailDetail,
        lfn_End,
    };
};