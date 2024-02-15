/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { getDefaultConfig, mergeConfig } from "@react-native/metro-config"
import path from "node:path"

const config = {}

// This stops "react-native run-windows" from causing the metro server to crash if its already running
const blockList = [new RegExp(`${path.resolve(__dirname, "windows").replace(/[/\\]/g, "/")}.*`)]
// This prevents "react-native run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
blockList.push(/.*\.ProjectImports\.zip/)

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
