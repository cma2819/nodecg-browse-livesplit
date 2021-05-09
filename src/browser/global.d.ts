import {
  CreateNodecgInstance,
  CreateNodecgConstructor
} from 'ts-nodecg/browser';
import { Configschema } from '../nodecg/generated/configschema';
import { ReplicantMap } from '../nodecg/replicants';
import { MessageMap } from '../nodecg/messages';

declare global {
    const nodecg: CreateNodecgInstance<
      'nodecg-vue-ts-template',
      Configschema,
      ReplicantMap,
      MessageMap
    >;
    const NodeCG: CreateNodecgConstructor<
      'nodecg-vue-ts-template',
      Configschema,
      ReplicantMap,
      MessageMap
    >;
}
