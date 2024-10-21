import { homedir } from 'os'
import { appDirectoryName } from './../../common-shared/constants'
import { ensureDir, pathExists, outputFile, readFile as fsReadFile, unlink } from 'fs-extra'
import path from 'path'
import { CreateDirectory, CreateFile, ReadFile, DeleteFile } from './../../common-shared/types'

export const rootDir = `${homedir()}/${appDirectoryName}`

export const createDirectory: CreateDirectory = async (dirPath) => {
  const fullPath = path.resolve(rootDir, dirPath)

  try {
    await ensureDir(fullPath)
    return fullPath
  } catch (err) {
    console.error(`Error creating directory at ${fullPath}:`, err)
  }
}

export const createFile: CreateFile = async (filePath, content) => {
  const fullPath = path.resolve(rootDir, filePath)

  try {
    const fileExists = await pathExists(fullPath)
    if (fileExists) {
      throw new Error(`File already exists at ${fullPath}`)
    }

    try {
      await outputFile(fullPath, content)
      return filePath
    } catch (err) {
      throw new Error(`Failed to write file at ${fullPath}`)
    }
  } catch (err) {
    console.error(`Error creating file at ${fullPath}:`, err)
  }
}

export const readFile: ReadFile = async (filePath) => {
  const fullPath = path.resolve(rootDir, filePath)

  try {
    const fileExists = await pathExists(fullPath)
    if (!fileExists) {
      throw new Error(`File does not exist at ${fullPath}`)
    }

    const content = await fsReadFile(fullPath, 'utf-8')
    return content
  } catch (err) {
    console.error(`Error read file at ${fullPath}:`, err)
  }
}

export const deleteFile: DeleteFile = async (filePath) => {
  const fullPath = path.resolve(rootDir, filePath)

  try {
    const fileExists = await pathExists(fullPath)
    if (!fileExists) {
      throw new Error(`File does not exist at ${fullPath}`)
    }

    await unlink(fullPath)
  } catch (err) {
    console.error(`Error delete file at ${fullPath}:`, err)
  }
}
