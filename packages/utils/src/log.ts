import {getWorkspaceRoot, getWorkspacePackages} from './workspace'

export async function getWorkspaceInfo() {
  const root = await getWorkspaceRoot()
  const all = await getWorkspacePackages()
  console.log(`root: ${root}`)
  console.log(`all: ${JSON.stringify(all)}`)
}

getWorkspaceInfo()