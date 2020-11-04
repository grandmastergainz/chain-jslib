import ow from 'ow';
import { owStrictObject } from '../ow.types';

export const owNetwork = () =>
    owStrictObject().exactShape({
        chainId: ow.string,
        addressPrefix: ow.string,
        validatorAddressPrefix: ow.string,
        coin: owStrictObject().exactShape({
            baseDenom: ow.string,
            croDenom: ow.string,
        }),
        bip44Path: owStrictObject().exactShape({
            coinType: ow.number,
            account: ow.number,
        }),
    });
