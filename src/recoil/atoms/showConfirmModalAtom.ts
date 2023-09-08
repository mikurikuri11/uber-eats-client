import { atom, RecoilState } from 'recoil';

export const showConfirmModalAtom: RecoilState<boolean> = atom({
  key: 'showConfirmModal',
  default: false,
});
