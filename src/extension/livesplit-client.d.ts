declare module 'livesplit-client' {
  type LiveSplitCommand = 'connected'|'disconnected';

  export default class LiveSplitClient {
    constructor(address: string);
    connect(): Promise<void>;
    disconnect(): boolean;
    on(command: LiveSplitCommand, callback: Function): void;
    on(command: 'data', callback: (data: {}) => void): void;
    getCurrentTime(): Promise<string>;
  }
}
