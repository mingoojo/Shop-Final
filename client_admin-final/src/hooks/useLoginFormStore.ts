import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import LoginFormStore from '../store/LoginFormStore';

export default function useLoginFormStore() {
  const store = container.resolve(LoginFormStore);
  return useStore(store);
}
