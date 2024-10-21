import { ElectronAPI } from '@electron-toolkit/preload'
import { ReadFile, CreateFile, CreateDirectory, DeleteFile } from '@common-shared/types'
import { ipcMain } from 'electron'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown,
    context: {
      locale: string
      createDirectory: CreateDirectory
      createFile: CreateFile
      readFile: ReadFile
      deleteFile: DeleteFile
    }
  }
}
