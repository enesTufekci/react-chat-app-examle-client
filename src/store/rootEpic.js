import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

export const isTypingThrottleEpic = action$ =>
  action$.ofType('INPUT_UPDATED')
    .throttleTime(1500)
    .mapTo({ type: 'IS_TYPING_BRIDGE' });

export const isTypingBridgeEpic = action$ =>
  action$.ofType('IS_TYPING_BRIDGE')
    .mapTo({ type: 'IS_TYPING', meta: { socket: true } });

export const typingStoppedEpic = action$ =>
  action$.ofType('IS_TYPING')
    .mergeMap(() =>
      Observable.timer(2000)
        .takeUntil(action$.ofType('IS_TYPING_BRIDGE'))
        .mapTo({ type: 'TYPING_STOPPED', meta: { socket: true } }));

export const messageSentEpic = action$ =>
  action$.ofType('USER_SENT_MESSAGE')
    .mapTo({ type: 'TYPING_STOPPED', meta: { socket: true } });


export default combineEpics(
  isTypingThrottleEpic,
  isTypingBridgeEpic,
  messageSentEpic,
  typingStoppedEpic,
);
