import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  notifications: [],
};

const getMessage = (actionType, message) => {
  switch (actionType) {
    case actionTypes.LOGIN_SUCCESS:
      return 'خوش آمدید!';
    case actionTypes.LOGIN_FAILURE:
      return 'نام کاربری یا رمزعبور اشتباه است!';
    case actionTypes.CALL_MENTOR_SUCCESS:
      return 'درخواست شما برای منتور‌ها ارسال شد.';
    case actionTypes.SEND_ANSWER_SUCCESS:
      return 'جواب شما با موقفیت ثبت شد!';
    case actionTypes.SEND_ANSWER_FAILURE:
      return 'یک مشکلی هست. جواب شما ثبت نشد.';
    default:
      return message;
  }
};

export default function notifications(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.ENQUEUE_SNACKBAR:
      return enquequeSnackbar({ state, ...action });

    case actionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          action.dismissAll || notification.key === action.key
            ? { ...notification, dismissed: true }
            : { ...notification }
        ),
      };

    case actionTypes.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key
        ),
      };

    case actionTypes.SEND_ANSWER_FAILURE:
    case actionTypes.LOGIN_FAILURE:
      return enquequeSnackbar({
        state,
        notification: {
          message: getMessage(action.type, action.error),
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error',
            autoHideDuration: 3000,
          },
        },
      });

    case actionTypes.SEND_ANSWER_SUCCESS:
    case actionTypes.CALL_MENTOR_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return enquequeSnackbar({
        state,
        notification: {
          message: getMessage(action.type, action.message),
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success',
            autoHideDuration: 3000,
          },
        },
      });

    default:
      return state;
  }
}

const enquequeSnackbar = ({ state, notification }) => ({
  ...state,
  notifications: [
    ...state.notifications,
    {
      key: notification.options.key,
      ...notification,
    },
  ],
});