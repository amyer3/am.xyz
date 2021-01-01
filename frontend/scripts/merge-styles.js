'use strict'

var BEGIN_TIME = Date.now()
//process.env.NODE_ENV = 'production';
/**
 * list all styles under ../src/styles/individual
 * merge these styles into a main file
 */
const chalk = require('chalk');
const fs = require('fs-extra');

const PATH_TO_SRC ='./src/'
const OUTPUT_FILE = process.env.NODE_ENV == 'production' ? './build/site.css' : PATH_TO_SRC + 'style/all.css'

let EXISTING_MERGE = fs.existsSync('./src/style/site.css')
let SRC_DIRS = fs.readdirSync('./src/')
var _String_To_Write = ""
var num_files = 0
let TARGET_REGEX = /.(css|scss|sass)/

if (EXISTING_MERGE) {
    console.log(chalk.white('Existing file found at ') + chalk.cyan(OUTPUT_FILE))
    console.log(chalk.white.bold('Deleting this file before merge begins...'))
    fs.unlinkSync(OUTPUT_FILE)
    console.log(chalk.bold('Delete complete.'))
}

// search dirs
// for each file under /src
// if file && .css extension, return contents of file
// if directory, return this function with contents of directory

function search_merge(dir, string, prepend) {
    for (const item of dir) {
        let stat = fs.lstatSync(prepend+item)

        if (stat.isFile() && TARGET_REGEX.test(item)) {
            console.log(chalk.bold.italic(item) + ' merged')
            _String_To_Write += '\n/* ' + prepend + item + '*/\n' + fs.readFileSync(prepend + item)
            num_files++
            
        }
        else if (stat.isDirectory() && item !== 'build') {
            search_merge(fs.readdirSync(prepend + item), string, prepend + item + '/')
        }
    }
    return
}

search_merge(SRC_DIRS, "", PATH_TO_SRC)

try {
    fs.writeFileSync(OUTPUT_FILE, _String_To_Write)
    console.log(chalk.cyan('All files in /individual have been written to ' + OUTPUT_FILE))
    console.log(
        chalk.white('Total time to merge ') +
        chalk.bold.white(num_files) +
        chalk.white(' files was ') + chalk.bold.green(Date.now() - BEGIN_TIME) +
            chalk.white('ms')
    )  
} catch (error) {
    console.log(chalk.red('Error writing the final file'))
    console.log(error)
    
}


