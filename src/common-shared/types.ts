export type CreateDirectory = (dirPath: string) => Promise<string>

export type CreateFile = (filePath: string, content: string) => Promise<string>

export type ReadFile = (filePath: string) => Promise<string>
export type DeleteFile = (filePath: string) => Promise<void>
