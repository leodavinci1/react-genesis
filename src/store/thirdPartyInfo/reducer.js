import { SET_CLIENT_APP_ORDER_INFO } from './actions';

const initialState = {
  merchant: {
    id: 0,
    idUnity: null,
    name: '',
  },
  marketplaceId: null,
  sessionToken: null,
  orderCreatedOn: null,
  userId: null,
  order: {
    items: [],
    cashback: null,
    cashbackPercent: null,
    prefix: null,
    totalValue: 0,
  },
};

export default function thirdPartyInfo(state = initialState, action) {
  switch (action.type) {
    case SET_CLIENT_APP_ORDER_INFO:
      return {
        ...state,
        ...action.info,
      };
    default:
      return state;
  }
}
