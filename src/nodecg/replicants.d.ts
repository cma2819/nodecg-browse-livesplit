import { Assets } from "./asset";
import { CurrentTime } from './generated';

type ReplicantMap = {
    assets: Assets,
    currentTime: CurrentTime
};

export {
    Assets,
    CurrentTime,
    ReplicantMap
};
