const path = require('path')
const { fork } = require('child_process')
const colors = require('colors')
const fs = require('fs')

const package = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json')))

package.scripts.prepush = 'npm run test:prod && npm run build'
package.scripts.commitmsg = 'commitlint -E HUSKY_GIT_PARAMS'

fs.writeFileSync(path.resolve(__dirname, '..', 'package.json'), JSON.stringify(package, null, 2))

// Call husky to set up the hooks
fork(path.resolve(__dirname, '..', 'node_modules', 'husky', 'lib', 'installer', 'bin'), ['install'])

console.log()
console.log(colors.green('Done!!'))
console.log()

if (package.repository.url.trim()) {
  console.log(colors.cyan('Now run:'))
  console.log(colors.cyan('  npm install -g semantic-release-cli'))
  console.log(colors.cyan('  semantic-release-cli setup'))
  console.log()
  console.log(colors.cyan('Important! Answer NO to "Generate travis.yml" question'))
  console.log()
  console.log(
    colors.gray('Note: Make sure "repository.url" in your package.json is correct before')
  )
} else {
  console.log(colors.red('First you need to set the "repository.url" property in package.json'))
  console.log(colors.cyan('Then run:'))
  console.log(colors.cyan('  npm install -g semantic-release-cli'))
  console.log(colors.cyan('  semantic-release-cli setup'))
  console.log()
  console.log(colors.cyan('Important! Answer NO to "Generate travis.yml" question'))
}

console.log()
