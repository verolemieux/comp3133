let fs = require("fs")

// o	remove all the files from the Logs directory, if exists
// o	output the file names to delete
// o	remove the Logs directory

const deleteFiles = () => {
    console.log(process.cwd())
    let logFiles = fs.readdirSync(process.cwd() + '/logs')
    logFiles.forEach(f => {   
        console.log(`deleting file... ${f}`)
        fs.unlinkSync(process.cwd() + `/logs/${f}`)
    })
} 

const deleteDirectory = () => {
    fs.rmdir(process.cwd() + '/question-3/logs', (err) => {
        if (err) throw err;
    })
}

const removeLogFiles = () => {
    deleteFiles()
    process.chdir('../');
    deleteDirectory()
}

removeLogFiles()


