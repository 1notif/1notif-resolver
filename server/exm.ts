import axios from 'axios';
import { oneNotifFunction } from './constants';

async function exmRead(id: string): Promise<any> {
  try {
    const state: any = await axios.get(`https://api.exm.dev/read/${id}`);
    return state?.data;
  } catch (err) {
    return {};
  }
}

export async function resolveLabel(label: string): Promise<any> {
  try {
    const oneNotifState = await exmRead(oneNotifFunction);
    const targetFunction = oneNotifState?.registrar[label];
    const targetState = await exmRead(targetFunction);
    return targetState;
  } catch (e) {
    return {};
  }
}
