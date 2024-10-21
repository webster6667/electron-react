import { CreateFile, ReadFile, DeleteFile, CreateDirectory } from '@common-shared/types' // Импортируем типы функций

type FileSystemAdapter = {
  createFile: CreateFile
  readFile: ReadFile
  deleteFile: DeleteFile
  createDirectory: CreateDirectory
}

export const fileSystemAdapter: FileSystemAdapter = {
  createFile: async (filePath, content) => {
    try {
      return await window.context.createFile(filePath, content)
    } catch (error) {
      console.error('Error creating file:', error.message)
      throw error
    }
  },

  readFile: async (filePath) => {
    try {
      return await window.context.readFile(filePath)
    } catch (error) {
      console.error('Error reading file:', error.message)
      throw error
    }
  },

  deleteFile: async (filePath) => {
    try {
      await window.context.deleteFile(filePath)
    } catch (error) {
      console.error('Error deleting file:', error.message)
      throw error
    }
  },

  createDirectory: async (dirPath) => {
    try {
      return await window.context.createDirectory(dirPath)
    } catch (error) {
      console.error('Error creating directory:', error.message)
      throw error
    }
  }
}
