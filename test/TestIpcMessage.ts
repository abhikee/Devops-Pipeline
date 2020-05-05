export interface TestIPCMessage {
  id: number;
  type: MessageType;
  args: any[];
}

export interface TestIPCMessageResult {
  id: number;
  resolve?: any;
  reject?: any;
}

export interface AppTestMessage {
  type: AppMessageType;
}

export enum AppMessageType {
  Ready,
  WindowLoaded,
  SavedBackup,
}

export enum MessageType {
  WindowCount,
  StoreData,
  StoreSettingsLocation,
  StoreSet,
  AppMenuItems,
  SpellCheckerManager,
  SpellCheckerLanguages,
  ClickLanguage,
  BackupsAreEnabled,
  ToggleBackupsEnabled,
  BackupsLocation,
  PerformBackup,
  ChangeBackupsLocation,
  MenuReloaded,
  UpdateManagerState,
  CheckForUpdate,
  UpdateManagerNotifiedStateChange,
  Relaunch,
  DataArchive,
  GetJSON,
  DownloadFile,
  AutoUpdateEnabled,
}
